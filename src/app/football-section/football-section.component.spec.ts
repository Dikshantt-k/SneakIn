import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballSectionComponent } from './football-section.component';

describe('FootballSectionComponent', () => {
  let component: FootballSectionComponent;
  let fixture: ComponentFixture<FootballSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FootballSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootballSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
