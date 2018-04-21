import { AuthorService } from './author/author.services';
import { CoursesService } from './courses.service';
import { CoursesComponent } from './courses.component'; //Need to import all of our components here.
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AuthorComponent } from './author/author.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { FavoritePropBindComponent } from './favorite-prop-bind/favorite-prop-bind.component';
import { CustomContentComponent } from './custom-content/custom-content.component';
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';


@NgModule({
  declarations: [ //This is where we add all the components that are part of the module.
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent,
    FavoriteComponent,
    FavoritePropBindComponent,
    CustomContentComponent,
    CodeSnippetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

