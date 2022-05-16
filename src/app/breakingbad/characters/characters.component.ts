import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/codeblock/codeblock.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  constructor() {}
  test = '';
  characters: Character[] = [];
  characters2: Character[] = [];
  currentPage = 0;
  pageSize = 20;
  totaLength = 0;
  ngOnInit(): void {
    fetch('https://www.breakingbadapi.com/api/characters')
      .then((res) => res.json())
      .then((res) => {
        this.totaLength = res.length;
        this.characters = res.slice(0, this.pageSize);
      });
  }
  handlePage(e: any) {
    console.log('Teest');
    let index = 0
    if(e.pageIndex > e.previousPageIndex){ //next
      index = (e.previousPageIndex + 1) * e.pageSize
    }else { //prev
      index = e.pageIndex * e.pageSize
    }
    fetch(`https://www.breakingbadapi.com/api/characters?limit=${this.pageSize}&offset=${index}`)
      .then((res) => res.json())
      .then((res) => {
        this.characters = res;
      });
  }
}
