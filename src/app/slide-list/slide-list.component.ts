import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slide-list',
  standalone: true,
  imports: [],
  templateUrl: './slide-list.component.html',
  styleUrl: './slide-list.component.css'
})

export class SlideListComponent {
  //Input and output 
  @Input() slides: any[] = [];
  @Output() deleteSlide = new EventEmitter<any>();

  //Method to emit delete event
  onDeleteSlide(slide: any): void {
    this.deleteSlide.emit(slide);
  }
}