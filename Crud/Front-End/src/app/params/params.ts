import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

interface Param {
  key: string;
  value: string;
  description: string;
}

@Component({
  selector: 'app-params',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './params.html',
  styleUrls: ['./params.css']
})
export class Params {
  params = signal<Param[]>([
    { key: '', value: '', description: '' }
  ]);

  addParam() {
    this.params.update(p => [...p, { key: '', value: '', description: '' }]);
  }

  removeParam(index: number) {
    this.params.update(p => p.filter((_, i) => i !== index));
  }
}
