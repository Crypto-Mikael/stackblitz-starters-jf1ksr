import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { UiFinalDeSemanaStepperComponent } from './ui/ui-final-de-semana-stepper/ui-final-de-semana-stepper.component';

@Component({
  selector: 'app-lib-cocktail-api',
  templateUrl: './lib-cocktail-api.component.html',
  styleUrls: ['./lib-cocktail-api.component.css'],
  standalone: true,
  imports: [UiFinalDeSemanaStepperComponent, HttpClientModule, MatCardModule],
})
export class LibCocktailApiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
