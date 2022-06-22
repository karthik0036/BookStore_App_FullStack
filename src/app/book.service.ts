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
    getBookRecordByBookName(bookName:any){
        return this.httpClient.get(this.baseUrl +"/getBookByName/"+ bookName);
    }

    sortAscByPrice(){
        return this.httpClient.get(this.baseUrl + "/sortasc");
    }
    sortDescByPrice(){
        return this.httpClient.get(this.baseUrl + "/sortdesc");
    }

    
}

