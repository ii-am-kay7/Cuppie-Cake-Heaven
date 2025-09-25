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
    { src: 'assets/images/choccake2.jpeg', alt: 'Gallery image 1' },
    { src: 'assets/images/rose-cake.jpeg', alt: 'Gallery image 2' },
    { src: 'assets/images/dessert1.jpeg', alt: 'Gallery image 3' },
    { src: 'assets/images/dessert2.jpeg', alt: 'Gallery image 4' },
    { src: 'assets/images/dessert3.jpeg', alt: 'Gallery image 5' },
    { src: 'assets/images/dessert4.jpeg', alt: 'Gallery image 6' },
    { src: 'assets/images/dessert5.jpeg', alt: 'Gallery image 7' },
    { src: 'assets/images/dessert6.jpeg', alt: 'Gallery image 8' },
    { src: 'assets/images/dessert7.jpeg', alt: 'Gallery image 9' },
    { src: 'assets/images/dessert8.jpeg', alt: 'Gallery image 10' },
    { src: 'assets/images/choc-cake3.png', alt: 'Gallery image 11' },
    { src: 'assets/images/cupcakes1.jpeg', alt: 'Gallery image 12' },
    { src: 'assets/images/cupcakes2.jpeg', alt: 'Gallery image 13' },
    { src: 'assets/images/minnie-cupcakes.png', alt: 'Gallery image 14' },
    { src: 'assets/images/winnie-cake.png', alt: 'Gallery image 15' },
    { src: 'assets/images/unicorn-cake.png', alt: 'Gallery image 16' },
    { src: 'assets/images/rose-cake.jpeg', alt: 'Gallery image 17' },
    { src: 'assets/images/image15.jpeg', alt: 'Gallery image 18' },
    { src: 'assets/images/barbie-cake.png', alt: 'Gallery image 19'  },
    { src: 'assets/images/choccake.jpeg', alt: 'Gallery image 20' }

  ];
}
