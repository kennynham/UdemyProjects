import { FavoriteChangedEventArgs } from './favorite-prop-bind/favorite-prop-bind.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //This will call the html template from app.component.html.
  styleUrls: ['./app.component.css']  //This will grab the styles for the template.
})
export class AppComponent {
  post = {
    appFavorite: true
  }
  courses = [];
  viewMode = 'list';
  list = [
    { id: 1, name: "Item1" },
    { id: 2, name: "Item2" },
    { id: 3, name: "Item3" },
  ];

  i = 4;
  onAdd() {
    this.list.push({id: this.i, name: 'Item'+ this.i});
    this.i++;
  }

  onRemove(listItem) {
    let index = this.list.indexOf(listItem);
    this.list.splice(index, 1);
  }

  // Passing Data into a known variable, appFavorite
  // onFavoriteChange(appFavorite) {
  //   console.log("Favorite changed: ", appFavorite);
  // }

  // Passing Data into an object when (change) is triggered.
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) { // Optional custom type annotation
    console.log("Favorite changed: ", eventArgs);
  }
}
