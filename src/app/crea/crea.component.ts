import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crea-article',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crea.component.html',
  styleUrl: './crea.component.css'
})
export class CreaArticleComponent {
  fb = inject(FormBuilder);
  articleService = inject(ArticleService);
  router = inject(Router);

  articleForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    body: ['', Validators.required],
    tagList: [''],
  });

  onSubmit(): void {
    const formData = this.articleForm.value;
    const articleData = {
      ...formData,
      tagList: formData.tagList ? formData.tagList.split(',').map((tag: string) => tag.trim()) : []
    };
    this.articleService.createArticle(articleData).subscribe(
      (response) => {
        console.log('Article created successfully', response);
        this.router.navigate(['/view']); // Navigate to the articles list page after successful creation
      },
      (error) => {
        console.error('Error creating article', error);
      }
    );
  }

}
