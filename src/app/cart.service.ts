import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private baseUrl: string = "http://localhost:8080/cart";

    constructor(private httpClient: HttpClient) {}

    addCart(cart:any){
        return this.httpClient.post(this.baseUrl + "/create",cart);
    }

    getCartRecordById(Id:any){
        return this.httpClient.get(this.baseUrl + "/getById/"+Id);
    }
    
    getCartRecordByBookId(Id:any){
        return this.httpClient.get(this.baseUrl + "/retrieveCartByBookId/"+Id);
    }
    getCartRecordByUserId(Id:any){
        return this.httpClient.get(this.baseUrl + "/retrieveCartByUserId/"+Id);
      }
    getAllCartRecords(){
        return this.httpClient.get(this.baseUrl + "/getAll");
    }

    deleteCartByCartId(Id:any){
        return this.httpClient.delete(this.baseUrl + "/delete/"+Id);
    }

    updateCartByCartQuantityByCartId(Id:any,quantity:any){
        return this.httpClient.get(this.baseUrl + "/updateCartQuantity/"+Id+"?quantity="+quantity)
    }

   


}