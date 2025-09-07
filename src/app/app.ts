import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './features/products/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project-Management-System');
}
