import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Observable } from 'rxjs';
import { CocktailsDTO } from '../../models/DTOs/CocktailslDTO';
import { CocktailsService } from '../../data-acess/cocktails-data-acess.service';
import { UiCocktailListComponent } from '../ui-cocktail-list/ui-cocktail-list.component';

@Component({
  selector: 'app-ui-cocktail-table',
  templateUrl: './ui-cocktail-table.component.html',
  styleUrls: ['./ui-cocktail-table.component.css'],
  standalone: true,
  imports: [CommonModule, MatListModule, UiCocktailListComponent],
  providers: [CocktailsService],
})
export class UiCocktailTableComponent implements OnInit {
  constructor(private cocktailsService: CocktailsService) {}

  public cocktais$: Observable<{ drinks: CocktailsDTO[] }> =
    this.cocktailsService.getCocktaislMargarita();

    public cocktais2 = signal<CocktailsDTO[]>([]);

    ngOnInit() {
      this.cocktailsService.getCocktaislMargarita().subscribe((cocktais) => {
        this.cocktais2.set(cocktais.drinks);
      });
    }
}
