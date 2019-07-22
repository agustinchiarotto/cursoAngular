import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: any[] = [];

  constructor(private _heroresService: HeroesService,
              private _rotuer:Router) { }

  ngOnInit() {
    this.heroes = this._heroresService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(id: number) {

    this._rotuer.navigate(['/heroe',id]);
    
  }

}
