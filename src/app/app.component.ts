import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideListComponent } from './slide-list/slide-list.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AddSlideFormComponent } from './add-slide-form/add-slide-form.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SlideListComponent, CarouselComponent, AddSlideFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  //variables
  title = 'angular-carousel';
  slideList: any[] = [
    {
      imageUrl: "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942408_960_720.jpg",
      caption: "Online Shopping "
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2015/09/16/08/55/online-942406_960_720.jpg",
      caption: "Offline shopping"
    },
    {
      imageUrl: "https://cdn.pixabay.com/photo/2018/03/11/18/49/online-3217733_640.jpg",
      caption: "image3"
    },
    {
      imageUrl:"https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
      caption:"camara"
    }
  ];

 // Method to delete slide from slideList
  deleteItem(imageurl: string): void {
    // const index = this.slideList.indexOf(item);
    const index = this.slideList.findIndex((slide) => slide.imageUrl == imageurl);
    if (index !== -1) {
      //deleting the slide from the slideList
      this.slideList.splice(index, 1);
    }
  }

  // Event handler for slide deletion
  onDeleteSlide(item: any): void {
    this.deleteItem(item.imageUrl);
  }

  //adding slide to slideList
  onAddSlide(item:any):void{
    this.slideList.push(item);
  }
}
