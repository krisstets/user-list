import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/api/members`).pipe(map(data=>{
      return data.map((user: User)=> {
          return {_id: user._id,name: user.name, surname: user.surname, login: user.login, password: user.password};
        });
  }));
  }

  public getUsersId(_id: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.URL}/api/members/${_id}`);
  }
}
