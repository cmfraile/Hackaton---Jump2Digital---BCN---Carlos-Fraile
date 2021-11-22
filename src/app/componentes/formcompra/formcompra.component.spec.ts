import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcompraComponent } from './formcompra.component';

describe('FormcompraComponent', () => {
  let component: FormcompraComponent;
  let fixture: ComponentFixture<FormcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
