import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';
import { BuyInfo } from '../models/buyInfo';

@Injectable({
  providedIn: 'root'
})
export class CompraService {
  buyUrl = 'http://localhost:5000/Buy';
  constructor(private http: HttpClient) { 
    
  }

  buy(buyInfo:BuyInfo): Observable<Transaction>{
    // const body = {
    //   "userId": "usuario2",
    //   "quantityToInvest": 1000,
    //   "currencyName": "dolar"
    // }
   return this.http.post<Transaction>(this.buyUrl, buyInfo)
  }
}
