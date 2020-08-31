import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { repository } from '../repo-class/repository';
@Injectable({
  providedIn: 'root'
})
export class InfoRequestService {

  api= environment.apiUrl
  private username; 

  constructor(private http:HttpClient) { 
    this.username= "kevin3708"
  }
  userInfo(){
    return this.http.get("https://api.github.com/users/" + this.username);
  }

  userRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos");
  }

  updateInput(username){
this.username = username;
  }
}
