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
  @Input() set cocktais(cocktais: CocktailsDTO[]) {
    console.log(cocktais);
  };
  constructor() {}

  ngOnInit() {}
}
