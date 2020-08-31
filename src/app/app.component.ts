import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { User } from './user-class/user';
import { InfoRequestService} from '../app/github-http/info-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  login:User

  constructor(private infoService:InfoRequestService){
    
  }
  ngOnInit(){
    
  }
}