import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // defines a heroes array property
  heroes: Hero[] = [];
  // the constructor expects angular to inject HeroService into a private heroService property
  constructor(private heroService: HeroService) { }
  // the ngOnInit lifecycle hook calls getHeroes
  ngOnInit() {
    this.getHeroes();
  }
  // getHeroes returns the sliced list of heroes at positions 1 and 5, returning only 4 of the Top Heroes -- 2nd. 3rd, 4th, and 5th.
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
