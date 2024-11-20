import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private url="http://192.168.0.108:3000/users"
  constructor(private http:HttpClient) { }
  user:User[]=[]

  getUser():Observable<any>{
    
    return this.http.get(this.url)
  }

  postUser(data:User):Observable<any>{
    return this.http.post(this.url,data)
  }

  deleteUser(id:number):Observable<any>{
    return this.http.delete(this.url+"/"+id)
  }
  putUser(id:number,data:User):Observable<any>{
    return this.http.put(this.url+"/"+id,data)
  }
}
