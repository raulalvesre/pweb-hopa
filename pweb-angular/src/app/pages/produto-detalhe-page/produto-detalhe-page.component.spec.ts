import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalhePageComponent } from './produto-detalhe-page.component';

describe('ProdutoDetalhePageComponent', () => {
  let component: ProdutoDetalhePageComponent;
  let fixture: ComponentFixture<ProdutoDetalhePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoDetalhePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetalhePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
