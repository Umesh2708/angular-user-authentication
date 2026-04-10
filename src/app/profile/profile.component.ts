import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';   // ✅ ADD THIS
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],   // ✅ ADD THIS
  templateUrl: './profile.component.html'
})
export class ProfileComponent {

  user: any;

  constructor(private auth: AuthService) {
    this.user = this.auth.getUser();
  }
}