import { Component } from '@angular/core';
import { ImageService } from './image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Image Gallery Application';
  imageData = [];
  p: number = 1;
  userFilter: any = { title: '' };

  constructor(private imageService: ImageService) {
    this.getImageAndTitle();
  }
  
  getImageAndTitle = function () { 
    this.imageService.getImageAndTitle().subscribe(data =>{
      this.imageData = data;
    });
  };
}
