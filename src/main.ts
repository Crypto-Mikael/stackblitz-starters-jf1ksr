import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LibCocktailApiComponent } from './lib-cocktail-api/lib-cocktail-api.component';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LibCocktailApiComponent],
  template: `<app-lib-cocktail-api></app-lib-cocktail-api>`,
})
export class App {}

bootstrapApplication(App);
