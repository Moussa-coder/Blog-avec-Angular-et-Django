import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService, Article } from '../services/article.service';  // ← Correction ici

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent {

  articles: Article[] = [];
  loading: boolean = true;

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe({
      next: (data) => {
        this.articles = data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des articles:', error);
        this.loading = false;
      }
    });
  }
}
