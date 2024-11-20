import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private url="http://192.168.0.108:3000/cartItem"
  dataChange: EventEmitter<any> = new EventEmitter();

  cart_count:any;
  
  constructor(private http:HttpClient) { }
     // Method to update data and emit the change
  updateData(data: any) {
    this.dataChange.emit(data);
  }

  getCartItem():Observable<any>{
    return this.http.get(this.url);
  }

  postCartItem(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }
  deleteCartItem(id:any):Observable<any>{
    return this.http.delete(this.url+"/"+id);
  }
  putCartITem(id:any,data:any):Observable<any>{
    return this.http.put(this.url+"/"+id,data)
  }
  deleteProductFromCart(id:any){
    
  }
}
