import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery {
    galleryImages = [
    { src: 'assets/images/choc-cake2.jpeg', alt: 'Gallery image 1' },
    { src: 'assets/images/rose-cake.jpeg', alt: 'Gallery image 2' },
    { src: 'assets/images/dessert1.jpeg', alt: 'Gallery image 3' },
    { src: 'assets/images/dessert2.jpeg', alt: 'Gallery image 4' },
    { src: 'assets/images/dessert3.jpeg', alt: 'Gallery image 5' },
    { src: 'assets/images/dessert4.jpeg', alt: 'Gallery image 6' },
    { src: 'assets/images/dessert5.jpeg', alt: 'Gallery image 7' },
    { src: 'assets/images/dessert6.jpeg', alt: 'Gallery image 8' },
    { src: 'assets/images/dessert7.jpeg', alt: 'Gallery image 9' }
  ];
}
