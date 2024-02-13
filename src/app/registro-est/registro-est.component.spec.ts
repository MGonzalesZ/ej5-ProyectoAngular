import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEstComponent } from './registro-est.component';

describe('RegistroEstComponent', () => {
  let component: RegistroEstComponent;
  let fixture: ComponentFixture<RegistroEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroEstComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
