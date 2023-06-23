import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FeatureCocktailFormComponent } from './features/feature-cocktail-form/feature-cocktail-form.component';
import { UiCocktailTableComponent } from './ui/ui-cocktail-table/ui-cocktail-table.component';

@Component({
  selector: 'app-lib-cocktail-api',
  templateUrl: './lib-cocktail-api.component.html',
  styleUrls: ['./lib-cocktail-api.component.css'],
  standalone: true,
  imports: [
    UiCocktailTableComponent,
    FeatureCocktailFormComponent,
    MatCardModule,
  ],
})
export class LibCocktailApiComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
