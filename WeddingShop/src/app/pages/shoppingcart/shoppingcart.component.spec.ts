import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingbagComponent } from './shoppingcart.component';

describe('ShoppingbagComponent', () => {
  let component: ShoppingbagComponent;
  let fixture: ComponentFixture<ShoppingbagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingbagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});