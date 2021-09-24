import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitrinePageComponent } from './vitrine-page.component';

describe('VitrinePageComponent', () => {
  let component: VitrinePageComponent;
  let fixture: ComponentFixture<VitrinePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitrinePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitrinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
