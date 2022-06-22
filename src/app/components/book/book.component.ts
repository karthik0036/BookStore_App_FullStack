import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../BookModel';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book:Book= new Book('','','','',0,0);

  constructor() { }

  ngOnInit(): void {
  }

  addBook(){
      console.log(this.book);

    }

}
