import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserInterface } from './user.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent implements OnInit {
  title = 'Slogin';
  authService = inject(AuthService);
  http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<{ user: UserInterface }>('https://api.realworld.io/api/user')
      .subscribe({
        next: (response) => {
          console.log('response', response); // ovviamente deve sparire
          this.authService.currentUserSig.set(response.user);
        },
        error: ()=>{
          this.authService.currentUserSig.set(null);
        },
      });
  }

  logout(): void {
    console.log('logout');
    localStorage.setItem('token','');
    this.authService.currentUserSig.set(null);
  }
}
