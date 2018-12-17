import { Component, OnInit } from '@angular/core';
import { IImage } from './IImage';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
    { url: '../../assets/img/1.jpg'},
    { url: '../../assets/img/2.jpg'},
    { url: '../../assets/img/3.jpeg'}
];
  constructor() { }

  ngOnInit() {
  }

}
