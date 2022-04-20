import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable()
export class UserService {
  private getUsersUrl: string;
  private addUserUrl: string;
  private deleteUserUrl: string;
  private updateUrl: string;

  constructor(private http: HttpClient) {
    this.getUsersUrl = 'http://localhost:8080/view-all-users';
    this.addUserUrl = 'http://localhost:8080/add-user';
    this.deleteUserUrl = 'http://localhost:8080/deleteUser';
    this.updateUrl = 'http://localhost:8080/update'
  }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.getUsersUrl);
  }
  public save(user: User) {
    return this.http.post<User>(this.addUserUrl, user);
  }
  public delete(email: string) {
    return this.http.delete(this.deleteUserUrl + '/' + email);
  }
  public update(email: string, user: User) {
    return this.http.put(this.updateUrl + '/' + email, user);
  }
}
