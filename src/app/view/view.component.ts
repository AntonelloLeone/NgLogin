import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ViewService } from '../view.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{
  authService = inject(AuthService);
  articleService = inject(ViewService);
  articles: any[] = [];
  limit = 10;  // Number of articles per page
  offset = 0;  // Starting point for pagination
  totalArticles = 0; // Total number of articles
  Math: any;

  ngOnInit(): void {
    this.fetchArticles();
  }

  fetchArticles(): void {
    this.articleService.getArticles(this.limit, this.offset).subscribe(
      (response) => {
        this.articles = response.articles;
        this.totalArticles = response.articlesCount;
        console.log(this.articles);
      },
      (error) => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  truncateText(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  truncateTitle(text: string, limit: number): string {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  changePage(page: number): void {
    this.offset = (page - 1) * this.limit;
    this.fetchArticles();
  }

}
