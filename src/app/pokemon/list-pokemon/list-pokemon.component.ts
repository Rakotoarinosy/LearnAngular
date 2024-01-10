import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { Router } from '@angular/router'
import { PokemonService } from '../pokemon.service';

@Component({
    selector: 'app-list-pokemon',
    templateUrl: './list-pokemon.component.html',
    styleUrls: ['./list-pokemon.component.css']
})
export class ListPokemonComponent implements OnInit {
  pokemonList: Pokemon[];

  constructor(
    private router:Router,
    private pokemonService:PokemonService
  ) {}

  ngOnInit(): void {
      this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon) {
    console.log('test');
    this.router.navigate(['/pokemon', pokemon.id])
  }
}
