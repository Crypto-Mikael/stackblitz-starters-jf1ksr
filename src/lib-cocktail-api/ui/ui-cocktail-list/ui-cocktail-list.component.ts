import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { provideAnimations } from '@angular/platform-browser/animations';

import { CocktailsDTO } from '../../models/DTOs/CocktailslDTO';

type FormGroupCocktail = FormGroup<{
  nameCocktail: FormControl<string | null>;
  tagsCocktails: FormControl<string | null>;
}>;

@Component({
  selector: 'app-ui-cocktail-list',
  templateUrl: './ui-cocktail-list.component.html',
  styleUrls: ['./ui-cocktail-list.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
})
export class UiCocktailListComponent implements OnInit {
  _cocktais = new FormArray<FormGroupCocktail>([]);

  @Input() set cocktais(cocktais: CocktailsDTO[]) {
    cocktais.forEach((cocktail) => {
      this.addInFormArray(cocktail.strDrink, String(cocktail.strTags));
    });
  }
  constructor() {}

  addInFormArray(nameCocktail: string, tagsCocktails: string) {
    const formGroup = new FormGroup({
      nameCocktail: new FormControl<string | null>(nameCocktail),
      tagsCocktails: new FormControl<string | null>(tagsCocktails),
    }) as FormGroupCocktail;
    this._cocktais.push(formGroup);
  }

  ngOnInit() {}
}
