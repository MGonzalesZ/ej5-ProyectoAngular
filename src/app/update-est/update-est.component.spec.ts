import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstComponent } from './update-est.component';

describe('UpdateEstComponent', () => {
  let component: UpdateEstComponent;
  let fixture: ComponentFixture<UpdateEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
