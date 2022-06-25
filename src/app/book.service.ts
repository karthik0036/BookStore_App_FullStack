import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BookService {

    private baseUrl: string = "http://localhost:8080/bookservice";

    constructor(private httpClient: HttpClient) {}

    getBookRecords(){
        return this.httpClient.get(this.baseUrl + "/getBooks");
    }
    getBookRecordByBookName(name:any){
        return this.httpClient.get(this.baseUrl +"/getBookByName/"+ name);
    }

    sortAscByPrice(){
        return this.httpClient.get(this.baseUrl + "/sortasc");
    }
    sortDescByPrice(){
        return this.httpClient.get(this.baseUrl + "/sortdesc");
    }

    getBookRecordById(Id:any){
        return this.httpClient.get(this.baseUrl + "/getBook/"+Id)
      }

    
}

