import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 200,
    }
  ];

  addCharacter(character: Character): void {

    const newCharacter:Character = {id: uuid(), ... character};

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id: string) : void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
