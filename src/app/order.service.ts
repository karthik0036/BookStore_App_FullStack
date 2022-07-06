import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private baseUrl: string = "http://localhost:8080/order";

    constructor(private http:HttpClient) { }

    postOrder(order:any){
        return this.http.post(this.baseUrl + "/insert",order);
    }

    getAllOrders(){
        return this.http.get(this.baseUrl + "/retrieveAllOrders");
    }

    getOrderRecordById(Id:any){
        return this.http.get(this.baseUrl + "/retrieveOrder/"+Id);
    }

    deleteOrderRecordById(Id:any){
        return this.http.delete(this.baseUrl + "/deleteOrder/"+Id);
    }

    getTotalPrice(){
        return this.http.get(this.baseUrl + "/totalPrice");
    }


}