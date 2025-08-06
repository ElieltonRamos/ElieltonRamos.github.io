import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.html',
})
export class CardProject {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() link: string = '';
}
