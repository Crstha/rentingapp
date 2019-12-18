import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUrl: String = environment.baseUrl
  private apiKey: String = environment.apiKey

  constructor( private http:HttpClient) { }

  getTopHeadlines(countryCode: String, category: String){
    return this.http.get(`${this.baseUrl}/top-headlines?country=${countryCode}&category=${category}&apiKey=${this.apiKey}`)
  }
}
