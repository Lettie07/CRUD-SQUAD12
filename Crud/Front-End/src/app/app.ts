import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common'; // pra usar ngIf, ngFor
import { FormsModule } from '@angular/forms'; // pra usar ngModel
import { Body } from './body/body';
import { Authorization } from './authorization/authorization';
import { Params } from './params/params';
import { HeadersComponent } from "./headers/headers";


@Component({
  selector: 'app-root',
  imports: [MatTabsModule, CommonModule, Params, FormsModule, Body, Authorization, HeadersComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Front-End');
}
