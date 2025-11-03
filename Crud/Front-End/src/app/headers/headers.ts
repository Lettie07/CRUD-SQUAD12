import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Header {
  key: string;
  value: string;
}

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './headers.html',
  styleUrls: ['./headers.css']
})
export class HeadersComponent implements OnInit {
  headers: Header[] = [];
  newKey = '';
  newValue = '';
  token: string | null = null;

  ngOnInit() {
    this.token = localStorage.getItem('authToken');
  }

  addHeader() {
    if (this.newKey && this.newValue) {
      this.headers.push({ key: this.newKey, value: this.newValue });
      this.newKey = '';
      this.newValue = '';
    } else {
      alert('Preencha os dois campos, por favor.');
    }
  }

  removeHeader(index: number) {
    this.headers.splice(index, 1);
  }
}
