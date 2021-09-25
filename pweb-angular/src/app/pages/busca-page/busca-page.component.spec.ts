import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPageComponent } from './busca-page.component';

describe('BuscaPageComponent', () => {
  let component: BuscaPageComponent;
  let fixture: ComponentFixture<BuscaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
