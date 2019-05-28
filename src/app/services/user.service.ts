import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserStoreService} from './user-store.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private userStore: UserStoreService) { }

  login(username: string, password: string) {
    return this.httpClient.post('/api/user/login', {
      username: username,
      password: password
    }).pipe(map((response: any) => {
      this.userStore.token = response.token;
      return response;
    }));
  }

  register(username: string, password: string): Observable<any> {
    return this.httpClient.post('/api/user/register', {
      username: username,
      password: password
    });
  }
}
