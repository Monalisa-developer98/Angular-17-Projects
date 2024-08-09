import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDirectivesComponent } from './employee-directives.component';

describe('EmployeeDirectivesComponent', () => {
  let component: EmployeeDirectivesComponent;
  let fixture: ComponentFixture<EmployeeDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDirectivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
