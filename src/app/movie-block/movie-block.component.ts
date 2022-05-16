import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-block',
  templateUrl: './movie-block.component.html',
  styleUrls: ['./movie-block.component.scss']
})
export class MovieBlockComponent implements OnInit {

  constructor() { }
  name = "TT"
  ngOnInit(): void {
  }

}
