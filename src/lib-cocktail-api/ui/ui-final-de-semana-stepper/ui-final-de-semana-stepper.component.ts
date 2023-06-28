import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'ui-final-de-semana-stepper',
  templateUrl: './ui-final-de-semana-stepper.component.html',
  styleUrls: ['./ui-final-de-semana-stepper.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
  ],
})
export class UiFinalDeSemanaStepperComponent implements OnInit {
  sabado = new FormGroup({
    cocktail: new FormControl<string>(''),
    quantidade: new FormControl<number>(0),
  });
  constructor() {}

  ngOnInit() {}
}
