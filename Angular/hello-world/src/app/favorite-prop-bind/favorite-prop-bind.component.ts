import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core'; // Need to import Input in order to use Input/Output Properties

@Component({
  selector: 'favorite-prop-bind',
  templateUrl: './favorite-prop-bind.component.html',
  styleUrls: ['./favorite-prop-bind.component.css'],
  encapsulation: ViewEncapsulation.Emulated  /****  Emulated is used to force the scope of its parts to only itself.      ****
                                              ****  This way it wont style other tags of the same name.                   ****

  encapsulation: ViewEncapsulation.Native     ****  'Native' is used to encapsulate the scope of the view to only this    ****
                                              ****   component. It will not use any files outside of its Component.                          ****

  encapsulation: ViewEncapsulation.None       ****  'None' is used to allow the code in this Component to leak            ****
                                              ****  outside of this template. Typically don't want to use this.           ****/                                             
})
export class FavoritePropBindComponent implements OnInit {
  @Input('is-favorite') isFavorite: boolean; // You can add an alias inside of Input(). In this case it is 'is-favorite'.
  @Output('is-changed') change = new EventEmitter(); // You can add an alias inside of Output(). 

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;

    // Added for the Output section of the tutorial.
    // We want to raise an event after it has been clicked. 'emit()' is used to raise or publish an event.
    //this.change.emit(this.isFavorite);

    // Passing Event Data to an object called newValue
    this.change.emit({ newValue: this.isFavorite });
  }
}

// Custom type annotation
export interface FavoriteChangedEventArgs {
  newValue: boolean
}
