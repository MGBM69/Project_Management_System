import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductHome } from './product-home';

describe('ProductHome', () => {
  let component: ProductHome;
  let fixture: ComponentFixture<ProductHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
