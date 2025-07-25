import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ListService {
  constructor(private http: HttpClient) {}
  getItems() {
    return this.http.get<any[]>('/api/items');
  }
}
