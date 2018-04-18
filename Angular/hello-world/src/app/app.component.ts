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

  // Passing Data into a known variable, appFavorite
  // onFavoriteChange(appFavorite) {
  //   console.log("Favorite changed: ", appFavorite);
  // }

  // Passing Data into an object when (change) is triggered.
  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) { // Optional custom type annotation
    console.log("Favorite changed: ", eventArgs);
  }
}
