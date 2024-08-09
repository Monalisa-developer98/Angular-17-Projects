import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Math3Component } from './math3.component';

describe('Math3Component', () => {
  let component: Math3Component;
  let fixture: ComponentFixture<Math3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Math3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Math3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
