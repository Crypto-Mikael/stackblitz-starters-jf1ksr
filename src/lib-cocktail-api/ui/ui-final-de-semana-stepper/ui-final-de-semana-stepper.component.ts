import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'ui-final-de-semana-stepper',
  templateUrl: './ui-final-de-semana-stepper.component.html',
  styleUrls: ['./ui-final-de-semana-stepper.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
  ],
})
export class UiFinalDeSemanaStepperComponent implements OnInit {
  
  sabado = new FormGroup({
    cocktail: new FormControl<string | null>(null),
    quantidade: new FormControl<number | null>(null),
  });

  domingo = new FormGroup({
    cocktail: new FormControl<string>(''),
    quantidade: new FormControl<number>(0),
  });
  constructor() {}

  ngOnInit() {}
}
