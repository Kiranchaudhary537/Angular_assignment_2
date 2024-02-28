import { NgClass } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgClass],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
  @Input() slides: any[] = [];
  slideIndex: number = 0;

  //Initialize  setInterval 
  ngOnInit(): void {
    setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  //Method to move to next slide
  nextSlide(): void {
    this.slideIndex++;
    if (this.slideIndex >= this.slides.length) {
      this.slideIndex = 0;
    }
  }

  //Method to move to prev slide
  prevSlide(): void {
    this.slideIndex--;
    if (this.slideIndex < 0) {
      this.slideIndex = this.slides.length - 1;
    }
  }

  //Method to move desire slide
  goToSlide(index: number): void {
    this.slideIndex = index;
  }
}
