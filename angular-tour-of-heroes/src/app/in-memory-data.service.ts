import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Billie Jean' },
      { id: 12, name: 'Birdie' },
      { id: 13, name: 'Jedi' },
      { id: 14, name: 'Grace' },
      { id: 15, name: 'Lady' },
      { id: 16, name: 'Sam' },
      { id: 17, name: 'Sassy' },
      { id: 18, name: 'Miss Kitty' }
    ]
    return {heroes};
  }
  constructor() { }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
