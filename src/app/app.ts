import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Gallery } from "./pages/gallery/gallery";
import { Menu } from "./pages/menu/menu";
import { Testimonials } from "./pages/testimonials/testimonials";
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Gallery, Menu, Testimonials, Contact],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('cuppie-cakes-heaven');


}
