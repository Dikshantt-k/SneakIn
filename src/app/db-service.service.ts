import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {
  private url="http://192.168.0.108:3000/products"
  constructor(private http:HttpClient) { }

  getProoduct():Observable<any>{
    return this.http.get(this.url)
  }

  postProduct(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }

  deleteProduct(id:any):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }

  putProduct(id:any,data:any):Observable<any>{
    return this.http.put(this.url+"/"+id,data);
  }

  getProductById(id:any):Observable<any>{
    return this.http.get(this.url+"/"+id)
  }
}
