import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSlideFormComponent } from './add-slide-form.component';

describe('AddSlideFormComponent', () => {
  let component: AddSlideFormComponent;
  let fixture: ComponentFixture<AddSlideFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSlideFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSlideFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
