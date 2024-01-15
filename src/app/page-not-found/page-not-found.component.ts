import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.css',
    standalone: true,
    imports: [RouterLink]
})
export class PageNotFoundComponent {
  constructor(private router: Router) {

  }
  goToPokemonList() {
    this.router.navigate(['/pokemons']);
  }
}
