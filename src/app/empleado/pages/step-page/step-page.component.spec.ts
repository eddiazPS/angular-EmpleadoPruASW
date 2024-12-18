import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepPageComponent } from './step-page.component';

describe('StepPageComponent', () => {
  let component: StepPageComponent;
  let fixture: ComponentFixture<StepPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
