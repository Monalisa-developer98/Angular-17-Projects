import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterDivComponent } from './center-div.component';

describe('CenterDivComponent', () => {
  let component: CenterDivComponent;
  let fixture: ComponentFixture<CenterDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CenterDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CenterDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
