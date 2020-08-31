import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component'
import { InfoRequestService } from './github-http/info-request.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [InfoRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
