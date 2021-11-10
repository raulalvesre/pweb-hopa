import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CartItemResp } from 'src/app/shared/interfaces/cart-item-resp';
import { CartService } from 'src/app/shared/services/cart.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})

export class CartPageComponent {
  displayedColumns: string[] = ['imagem', 'item', 'quantidade', 'cost', 'delete'];
  endSubscriptionsNotifier = new Subject();
  qtdsForm: FormGroup;
  cartItems: MatTableDataSource<CartItemResp>;
  isLoading: boolean;

  get qtdsFormArray() {
    return this.qtdsForm.get('qtdsFormArray') as FormArray;
  }

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;

    this.cartItems = new MatTableDataSource<CartItemResp>();

    this.qtdsForm = this.formBuilder.group({
      qtdsFormArray: this.formBuilder.array([])
    });

    this.cartService.getCartItems().subscribe(
      (resp: any) => {
        this.cartItems.data = resp;
        this.isLoading = false;

        if (this.cartItems.data != null && this.cartItems.data.length > 0) {
          this.populateQtdsFormArray();
        };
      },
      (error) => console.log("deu ruim na hora de pegar os cart itens")
    );
  }

  private populateQtdsFormArray() {
    this.cartItems.data
      .map(x => ({
        id: x.product.id,
        qtd: x.quantidade
      }))
      .forEach((x: any) => {
        const qtdFormGroup = this.createQtdFromGroup(x);
        this.qtdsFormArray.push(qtdFormGroup);
      })
  }

  private createQtdFromGroup(x: any): FormGroup {
    const qtdFormGroup = this.formBuilder.group({
      id: x.id,
      qtd: x.qtd
    });

    qtdFormGroup.get('qtd').valueChanges
      .pipe(
        debounceTime(600),
        distinctUntilChanged((prev, curr) => prev.qtd !== curr.qtd),
        takeUntil(this.endSubscriptionsNotifier),
        tap(x => this.isLoading = true),
        switchMap(newQtd => this.cartService.updateProductQtd(qtdFormGroup.get('id').value, newQtd)),
        catchError(error => {
          console.log("deu ruim na hora de att a qtd do produto no cart");
          return throwError(error);
        }),
        switchMap(newQtd => this.cartService.getCartItems()),
      )
      .subscribe(
        (resp: any) => {
          this.cartItems.data = resp;
          this.isLoading = false;

          if (this.cartItems.data != null && this.cartItems.data.length > 0) {
            this.populateQtdsFormArray();
          };
        },
        (error) => console.log("deu ruim na hora de pegar os cart itens")
      );

      return qtdFormGroup;
  }

  getQtdsFormGroup(index: number) {
    return this.qtdsFormArray.controls[index] as FormGroup;

  }

  getTotalCost(): number {
    return this.cartItems.data
      .map(x => x.valorTotal)
      .reduce((acc, curr) => acc + curr, 0);
  }

  deleteFromCart(productId: number) {
    this.isLoading = true;

    this.cartService.deleteProductFromCart(productId).pipe(
      switchMap(
        (resp) => this.cartService.getCartItems(),
      ),
      catchError((err) => {
        console.log('deu ruim na hora de excluir o item', err);
        return throwError(err);
      })
    ).subscribe(
      (resp: any) => {
        this.cartItems.data = resp
        this.isLoading = false;
      },
      (error) => console.log("deu ruim na hora de pegar os cart itens")
    )
  }

  cleanCart() {
    this.isLoading = true;

    this.cartService.cleanCart().pipe(
      switchMap(
        (resp) => this.cartService.getCartItems(),
      ),
      catchError((err) => {
        console.log('deu ruim na hora de limpar o carrinho', err);
        return throwError(err);
      })
    ).subscribe(
      (resp: any) => {
        this.cartItems.data = resp
        this.isLoading = false;
      },
      (error) => console.log("deu ruim na hora de pegar os cart itens")
    )
  }

  pagamento() {
    this.snackBar.open("TA PAGO", "VLW", {
      duration: 2000,
    });
  }

  ngOnDestroy(): void {
    this.endSubscriptionsNotifier.next();
    this.endSubscriptionsNotifier.complete();
  }
}
