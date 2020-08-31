import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

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
    return this.http.get("https://api.github.com/users/" + this.username + "?access_token=" + this.api);
  }

  userRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "/repos" + "?access_token=" + this.api);
  }

  updateInput(username){
this.username = username
  }
}
