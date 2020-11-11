import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HeroeModel } from 'src/app/models/heroemodel';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      console.log('fnv');
      return;
    }
    console.log(form);
    console.log(this.heroe);

    this.heroesService.crearHeroe( this.heroe )
      .subscribe( resp => {
        console.log(resp);
        this.heroe = resp;
      });
  }

}
