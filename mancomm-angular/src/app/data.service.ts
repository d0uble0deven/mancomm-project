import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000/parse'; // URL to web api

  constructor(private http: HttpClient) { }

  getDocumentData(): Observable<any> {
    console.log('this.apiUrl: ', this.apiUrl)
    return this.http.get(this.apiUrl);
  }
}
