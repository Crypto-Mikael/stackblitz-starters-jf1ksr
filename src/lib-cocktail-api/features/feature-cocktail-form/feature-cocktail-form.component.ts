import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


//

interface CocktailGroup {
  cocktailName: FormControl<string | null>;
  cocktailsQuantity: FormControl<number | null>;
}

@Component({
  selector: 'feature-cocktail-form',
  templateUrl: './feature-cocktail-form.component.html',
  styleUrls: ['./feature-cocktail-form.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class FeatureCocktailFormComponent impl {
  public cocktailsOnDay = new FormArray<FormGroup<CocktailGroup>>([]);

  public newCocktailFormGroup(
    cocktailNameValue: string | null,
    cocktailsQuantityValue: number | null
  ): FormGroup<CocktailGroup> {
    const newFormGroupCocktail = new FormGroup<CocktailGroup>({
      cocktailName: new FormControl<string | null>(cocktailNameValue),
      cocktailsQuantity: new FormControl<number | null>(cocktailsQuantityValue),
    });
    return newFormGroupCocktail;
  }

  public addCocktailOnDayFormArray = (
    formGroup: FormGroup<CocktailGroup>
  ): void => this.cocktailsOnDay.push(formGroup);
}
