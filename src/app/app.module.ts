import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpolyeListComponent } from './empolye-list/empolye-list.component';

import {HttpClientModule} from '@angular/common/http';
import { AddEmpolyeComponent } from './add-empolye/add-empolye.component'
import { FormsModule } from '@angular/forms';
import { UapdetempolyeComponent } from './uapdetempolye/uapdetempolye.component';
import { LoginempolyeComponent } from './loginempolye/loginempolye.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpolyeListComponent,
    AddEmpolyeComponent,
    UapdetempolyeComponent,
    LoginempolyeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
