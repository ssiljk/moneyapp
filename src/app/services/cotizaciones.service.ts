import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';

@Injectable({
  providedIn: 'root'
})
export class CotizacionesService {
  private dolarUrl = 'http://localhost:5000/quote/';
  constructor(private http: HttpClient) { }

  getQuote(currency : string): Observable<Quote>{
    return this.http.get<Quote>(this.dolarUrl + currency)
  }
}
