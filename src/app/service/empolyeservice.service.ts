import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empolye } from '../model/empolye';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeserviceService {

  constructor(private httpclient:HttpClient) { }

  private url = "http://localhost:8080/project/employe";

  getempolyelist():Observable<Empolye[]>{
    return this.httpclient.get<Empolye[]>(`${this.url}`);
  }

  addempolye(empolye:Empolye):Observable<Object>{
    return this.httpclient.post(`${this.url}`,empolye);
  }
  
  getrmpolyebyid(id:number):Observable<Empolye>{
    return this.httpclient.get<Empolye>(`${this.url}/${id}`);
  }

  updateempolye(id:number,empolye:Empolye):Observable<Object>{
    return this.httpclient.put(`${this.url}/${id}`,empolye);
  }

  deleteempolye(id:number):Observable<object>{
    return this.httpclient.delete(`${this.url}/${id}`);
  }
}
