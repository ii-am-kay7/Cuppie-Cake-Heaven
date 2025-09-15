import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  menuItems = [
    { name: 'Cakes', img: 'assets/images/choccake.jpeg', description: 'Custom birthday, wedding, special occasions.' },
    { name: 'Cupcakes', img: 'assets/images/cupcakes1.jpeg', description: 'Classic, themed, assorted. Contact for quote.' },
    { name: 'Desserts', img: 'assets/images/dessert1.jpeg', description: 'Cheesecakes, puddings, treats. Contact for quote.' }
  ];
}
