import { Injectable, Signal, computed, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class ListStore {
  private items = signal<Item[]>([]);
  private loading = signal(false);

  readonly items$: Signal<Item[]> = computed(() => this.items());
  readonly loading$: Signal<boolean> = computed(() => this.loading());

  constructor(private http: HttpClient) {}

  loadItems() {
    this.loading.set(true);
    setTimeout(() => { 
      this.http.get<Item[]>('/api/items').subscribe({
        next: data => {
          this.items.set(data);
          this.loading.set(false);
        },
        error: () => {
          this.loading.set(false);
        }
      });
    }, 1000); 
  }
}