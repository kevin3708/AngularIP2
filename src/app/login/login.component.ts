import { Component, OnInit } from '@angular/core';
import{ InfoRequestService } from '../github-http/info-request.service';
import { User } from '../user-class/user';
import {repository } from '../repo-class/repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  login: any;
  username:any;
  userepo:any;
  
  constructor(private info:InfoRequestService) { 
  this.info = this.info;
  }

  searchProfile(){
    this.info.updateInput(this.username);
      let promise = new Promise((resolve, reject) => {
      this.info.userInfo().toPromise().then( response =>{
        this.login = response;
        console.log(response);
        
        this.info.userRepo().toPromise().then( reposits => {
          this.userepo = reposits;
          console.log(reposits);
          
        })
        
        
        resolve()
      },
      error =>{
        console.log("Error Occured");
        
       
        reject(error)
  
      })
  
     })
  }
  

  ngOnInit(): void {
  }

}
