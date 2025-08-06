import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { About } from './pages/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portifolio');
}
