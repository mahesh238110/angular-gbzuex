import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  baseApi: 'https://fakestoreapi.com/products?limit=5';

  constructor(private http: HttpClient) {}

  getAllData() {
    return this.http.get(this.baseApi);
  }
}
