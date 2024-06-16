
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Output()
  public onDeletedCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characters: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ];

  onDeleteCharacter(id?: string): void {
    if (!id) return;
    this.onDeletedCharacter.emit(id);
  }
}
