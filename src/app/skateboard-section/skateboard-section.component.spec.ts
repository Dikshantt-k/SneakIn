import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateboardSectionComponent } from './skateboard-section.component';

describe('SkateboardSectionComponent', () => {
  let component: SkateboardSectionComponent;
  let fixture: ComponentFixture<SkateboardSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkateboardSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkateboardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
