import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:5000';
  constructor(private http: HttpClient) { }


  public getUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(`${this.URL}/api/members`);
  }

  public getUsersById(_id: string): Observable<IUser>{
    return this.http.get<IUser>(`${this.URL}/api/members/${_id}`);
  }

  public deleteUserByID(_id: string){
    return this.http.delete<IUser>(`${this.URL}/api/members/${_id}`);
  }

  public editUser(_id: string, newInfo: IUser){
    return this.http.put<IUser>(`${this.URL}/api/members/${_id}`, newInfo);
  }

}
