// article.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private baseUrl = 'https://api.realworld.io/api';

  constructor(private http: HttpClient) {}

  createArticle(article: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/articles`, { article });
  }
}
