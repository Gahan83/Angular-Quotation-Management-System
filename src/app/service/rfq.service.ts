import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyRfq, Rfq } from '../common/Rfq';
import { Observable } from 'rxjs';
import { Quotes } from '../common/quotes';

@Injectable({
  providedIn: 'root',
})
export class RfqService {
  apiUrl: string = 'https://projectapi.gerasim.in/api/RfqTracker/';

  constructor(private readonly http: HttpClient) {}

  createRFQ(obj: Rfq): Observable<Rfq> {
    return this.http.post<Rfq>(`${this.apiUrl}CreateRFQ`, obj);
  }

  getRFQ(userId: number): Observable<MyRfq[]> {
    return this.http.get<MyRfq[]>(
      this.apiUrl + 'GetRFQByUserId?userid=' + userId
    );
  }

  getRFQs(): Observable<MyRfq[]> {
    return this.http.get<MyRfq[]>(this.apiUrl + 'GetRFQs');
  }

  createQuotes(obj: Quotes): Observable<Quotes> {
    return this.http.post<Quotes>(`${this.apiUrl}create-quote`, obj);
  }

  getRFQById(id: number): Observable<Rfq> {
    return this.http.get<Rfq>(this.apiUrl + 'GetRFQById?id=' + id);
  }
  getAllQuotesByQfqId(id: number): Observable<Rfq> {
    return this.http.get<Rfq>(this.apiUrl + 'GetAllQuotesByQfqId?rfqId=' + id);
  }
}
