import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { CocktailsDTO } from '../../models/DTOs/CocktailslDTO';

type FormGroupCocktail = FormGroup<{
  nameCocktail: FormControl<string | null>;
  tagsCocktails: FormControl<string[] | null>;
}>;

@Component({
  selector: 'app-ui-cocktail-list',
  templateUrl: './ui-cocktail-list.component.html',
  styleUrls: ['./ui-cocktail-list.component.css'],
  standalone: true,
  imports: [CommonModule, MatListModule, FormsModule],
})
export class UiCocktailListComponent implements OnInit {
  _cocktais = new FormArray<FormGroupCocktail>([]);

  @Input() set cocktais(cocktais: CocktailsDTO[]) {
    cocktais.forEach((cocktail) => {});
  }
  constructor() {}

  addInFormArray(nameCocktail: string, tagsCocktails: string[]) {
    const formGroup = new FormGroup({
      nameCocktail: new FormControl<string | null>(nameCocktail),
      tagsCocktails: new FormControl<string[] | null>(tagsCocktails),
    }) as FormGroupCocktail;
    this._cocktais.push(formGroup);
  }

  ngOnInit() {}
}
