import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  isFavorite: boolean; 
  isFavorite2: boolean;

  constructor() { }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

  onClick2() {
    this.isFavorite2 = !this.isFavorite2;
  }

  ngOnInit() {
  }
}