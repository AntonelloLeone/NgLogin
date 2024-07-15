import { inject, Injectable, signal } from "@angular/core";
import { UserInterface } from "./user.interface";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ViewService{
    private baseUrl = 'https://api.realworld.io/api';

    constructor(private http: HttpClient) {}
  
    getArticles(limit: number, offset: number) {
      return this.http.get<any>(`${this.baseUrl}/articles?limit=${limit}&offset=${offset}`);
    }
}