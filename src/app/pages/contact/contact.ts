import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  orderOnWhatsApp() {
  window.location.href = 'https://wa.me/0683923875';
  }
}

