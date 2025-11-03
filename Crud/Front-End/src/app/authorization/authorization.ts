import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authorization.html',
  styleUrl: './authorization.css'
})
export class Authorization {
  email = '';
  password = '';
  token: string | null = null;

  login() {
    if (this.email && this.password) {
      // simula login e gera token fake
      this.token = btoa(`${this.email}:${this.password}:${new Date().getTime()}`);
      localStorage.setItem('authToken', this.token);
      alert('Login realizado com sucesso!');
    } else {
      alert('Preencha todos os campos.');
    }
  }
}
