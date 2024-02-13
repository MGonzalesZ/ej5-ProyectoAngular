import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroReactiveComponent } from './registro-reactive.component';

describe('RegistroReactiveComponent', () => {
  let component: RegistroReactiveComponent;
  let fixture: ComponentFixture<RegistroReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
