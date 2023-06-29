import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { FeatureCocktailFormComponent } from '../../features/feature-cocktail-form/feature-cocktail-form.component';
@Component({
  selector: 'ui-final-de-semana-stepper',
  templateUrl: './ui-final-de-semana-stepper.component.html',
  styleUrls: ['./ui-final-de-semana-stepper.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    FeatureCocktailFormComponent,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
  ],
})
export class UiFinalDeSemanaStepperComponent implements OnInit {
  constructor() {}
  public formGeral: string | null = null;

  ngOnInit() {}
}
