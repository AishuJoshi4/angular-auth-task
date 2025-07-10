import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStore } from './list.store';

@Component({
  standalone: true,
  selector: 'app-list',
  imports: [CommonModule],
  styleUrl: './list.component.scss',
  templateUrl: './list.component.html'
})
export class ListComponent {
  store = inject(ListStore);

  constructor() {
    this.store.loadItems();
  }
}