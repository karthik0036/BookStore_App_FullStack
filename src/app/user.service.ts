import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl: string = "http://localhost:8080/userRegistrationService";

    constructor(private httpClient: HttpClient) {}

    postUserData(user:any){
        return this.httpClient.post(this.baseUrl +"/register",user);
    }

    getUserRecords(){
        return this.httpClient.get(this.baseUrl + "/get");
    }

    getUserRecordById(Id:any){
        return this.httpClient.get(this.baseUrl + "/get/"+Id);
      }

    deleteUserRecordById(Id:any){
        return this.httpClient.delete(this.baseUrl + "/delete/"+Id);
    }

    updateUserRecordById(token:any,user:any){
        return this.httpClient.put(this.baseUrl + "/update/"+token,user);
    }
      
    userLogin(loginData:any){
        return this.httpClient.post(this.baseUrl + "/login",loginData);
    }

    // changePassword(changePasswordData:any){
    //     return this.http.put(this.baseUrl + "/changepassword",changePasswordData,{responseType:"text" as "json"});
    // }

    getToken(email:any){
        return this.httpClient.get(this.baseUrl + "/getToken/"+ email);
    }

    getUserRecordByEmail(mail:any){
        return this.httpClient.get(this.baseUrl + "/getByEmail/"+ mail)
    }
    getUserRecordByToken(token:any){
        return this.httpClient.get(this.baseUrl + "/getAll/"+ token)
    }

    getloginStatus(email:string, password:string){
        return this.httpClient.get(this.baseUrl + "/logintest?email="+email+"&password="+password);
    }

    
}