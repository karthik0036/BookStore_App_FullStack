import { Component, OnInit } from '@angular/core';
import { Cart } from '../../CartModel';
import { BookService } from '../../book.service';
import { Book } from '../../BookModel';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  books:any;
  totalBooks: number = 10;
  search:Array<any> = [];
  sort!:string;


  constructor(private router:Router,private route:ActivatedRoute,private service:BookService) { }

  ngOnInit(): void {
    this.service.getBookRecords().subscribe((data:any)=>{
      console.log("Book Data retrieved successfully",data);
      this.books=data.data;
      this.totalBooks=this.books.length;
    });
  }

  
}
