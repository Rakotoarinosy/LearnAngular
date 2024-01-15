import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { NgIf } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-edit-pokemon',
    templateUrl: './edit-pokemon.component.html',
    styleUrl: './edit-pokemon.component.css',
    standalone: true,
    imports: [NgIf, PokemonFormComponent]
})
export class EditPokemonComponent implements OnInit{

  pokemon: Pokemon|undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private title: Title
  ) { }

  ngOnInit(): void {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if (pokemonId) {
      this.pokemonService.getPokemonById(+pokemonId)
        .subscribe(pokemon => {
          this.pokemon = pokemon;
          this.initTitle(pokemon);
        });
    } else {
      this.pokemon = undefined;
    }
  }

  initTitle(pokemon: Pokemon|undefined) {
    if(!pokemon) {
      this.title.setTitle('Pokemon not found');
      return;
    }
    this.title.setTitle(pokemon.name)
  }
}
