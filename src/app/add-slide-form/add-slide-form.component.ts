import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-slide-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-slide-form.component.html',
  styleUrl: './add-slide-form.component.css'
})


export class AddSlideFormComponent implements OnInit {

  @Output() addSlide = new EventEmitter<any>();
  addSlideForm: FormGroup = new FormGroup({
    imageUrl: new FormControl(''),
    caption: new FormControl(''),
  });

  constructor(private fb: FormBuilder) { }

  // Initialize the form group
  ngOnInit(): void {
    this.addSlideForm = this.fb.group({
      imageUrl: ['', Validators.required],
      caption: ['', Validators.required]
    });
  }


  //Method to emit addslide event
  addNewSlide(): void {
    this.addSlide.emit(this.addSlideForm.value);
  }

}
