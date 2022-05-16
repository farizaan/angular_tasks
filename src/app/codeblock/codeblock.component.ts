import { Component, OnInit } from '@angular/core';

export interface Character {
  char_id?: number;
  name: string;
  birthday?: string;
  category?: string;
  better_call_saul_appearance?: number[];
  appearance?: number[];
  occupation?: string[];
  img?: string;
  status: 'Alive' | 'Deceased' | 'Presumed dead';
  nickname?: string;
  portrayed?: string;

}
@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss']
})

export class CodeblockComponent implements OnInit {
  characters:Character[] = []
  name = ''
  constructor() { }

  ngOnInit(): void {

    fetch('https://www.breakingbadapi.com/api/characters').then(res => res.json()).then(res => this.characters = res)
  }

  getCharactersColor(character: Character){
    if (character.status == 'Alive') return 'green';
    if (character.status == 'Deceased') return 'red';
    if (character.status == 'Presumed dead') return 'yellow';
    return 'black'

  }
  onButtonClick(){
    console.log(this.name);

    this.characters.unshift({name: this.name, status: 'Alive'})
  }
}
