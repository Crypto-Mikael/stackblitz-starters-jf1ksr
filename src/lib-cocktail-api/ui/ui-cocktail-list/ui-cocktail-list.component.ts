import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { CocktailsDTO } from '../../models/DTOs/CocktailslDTO';
@Component({
  selector: 'app-ui-cocktail-list',
  templateUrl: './ui-cocktail-list.component.html',
  styleUrls: ['./ui-cocktail-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatListModule],
})
export class UiCocktailListComponent implements OnInit {
  _cocktais: CocktailsDTO[] = [];
  
  @Input() set cocktais(cocktais: CocktailsDTO[]) {
    this._cocktais = cocktais.filter(({ idDrink }) => idDrink === '11007');
  }
  constructor() {}

  ngOnInit() {}
}
