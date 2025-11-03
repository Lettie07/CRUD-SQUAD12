import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './body.html',
  styleUrls: ['./body.css']
})
export class Body {
  requestBody: string = `{
  "id": 1,
  "name": "Exemplo"
}`;

  clearBody() {
    this.requestBody = '';
  }

  formatBody() {
    try {
      const obj = JSON.parse(this.requestBody);
      this.requestBody = JSON.stringify(obj, null, 2);
    } catch {
      alert('JSON inválido. Corrija o corpo antes de formatar.');
    }
  }
}
