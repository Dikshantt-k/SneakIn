import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballSectionComponent } from './basketball-section.component';

describe('BasketballSectionComponent', () => {
  let component: BasketballSectionComponent;
  let fixture: ComponentFixture<BasketballSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasketballSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketballSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
