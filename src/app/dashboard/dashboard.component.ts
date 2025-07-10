import { Component, inject } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  styleUrl: './dashboard.component.scss',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  auth = inject(AuthService);
  router = inject(Router);
  email = this.auth.getUserEmail();
}
