import { Character } from './../../codeblock/codeblock.component';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-block',
  templateUrl: './character-block.component.html',
  styleUrls: ['./character-block.component.scss']
})
export class CharacterBlockComponent implements OnInit {
  @Input() character: Character | null = null
  constructor() { }

  ngOnInit(): void {
  }
  getCharactersColor(character: Character | null){
    if (character?.status == 'Alive') return 'primary';
    if (character?.status == 'Deceased') return 'accent';
    if (character?.status == 'Presumed dead') return 'warn';
    return 'black'

  }

}
