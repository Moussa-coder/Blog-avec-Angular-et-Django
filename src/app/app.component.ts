import { Component } from '@angular/core';
import { ArticlesListComponent } from './components/articles-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticlesListComponent], // Ensure ArticlesListComponent is used in the template
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
