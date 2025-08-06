import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from "./pages/home/home";
import { About } from './pages/about/about';
import { Formation } from "./pages/formation/formation";
import { Projects } from './pages/projects/projects';
import { Contact } from "./pages/contact/contact";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home, About, Formation, Projects, Contact],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portifolio');
}
