import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  url = 'http://localhost:5204/api/Users';

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<User[]>(this.url);
  }

  deleteUser(userId: number) {
   return this.http.delete(this.url + "/" + userId);
  }

  createUser(user:User){
    return this.http.post(this.url,user);
  }

  getUser(userId: number)
  {
    return this.http.get<User>(this.url + "/"+userId);
  }

  updateUser(user: User)
  {
    return this.http.put(this.url + "/" + user.id,user);
  }
    
  


}

export interface User{
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
}