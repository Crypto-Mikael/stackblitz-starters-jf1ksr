import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-cocktail-form',
  templateUrl: './feature-cocktail-form.component.html',
  styleUrls: ['./feature-cocktail-form.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FeatureCocktailFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
