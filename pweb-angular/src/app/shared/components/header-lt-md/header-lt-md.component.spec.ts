import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLtMdComponent } from './header-lt-md.component';

describe('HeaderLtMdComponent', () => {
  let component: HeaderLtMdComponent;
  let fixture: ComponentFixture<HeaderLtMdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLtMdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLtMdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
