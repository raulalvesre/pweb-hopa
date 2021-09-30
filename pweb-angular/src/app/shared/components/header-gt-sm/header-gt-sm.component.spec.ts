import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGtSmComponent } from './header-gt-sm.component';

describe('HeaderGtSmComponent', () => {
  let component: HeaderGtSmComponent;
  let fixture: ComponentFixture<HeaderGtSmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderGtSmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGtSmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
