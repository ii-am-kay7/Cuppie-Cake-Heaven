import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    orderOnWhatsApp() {
  window.location.href = 'https://wa.me/0683923875';
  }
}
