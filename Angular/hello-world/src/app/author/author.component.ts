import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.services';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  title = "Authors";
  authors;

  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }

  ngOnInit() {
  }

}
