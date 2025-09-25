import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Gallery } from "./pages/gallery/gallery";
import { Menu } from "./pages/menu/menu";
import { Testimonials } from "./pages/testimonials/testimonials";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";

@Component({
  selector: 'app-root',
  imports: [ Gallery, Menu, Testimonials, Contact, Home],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('cuppie-cakes-heaven');


}
