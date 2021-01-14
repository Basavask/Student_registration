import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signIn() {
    this.http.get('http://localhost:3000/token/sign')
      .subscribe(
        (res) => {
          console.log(res);
          if (res['token']) {
            localStorage.setItem('token', res['token']);
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }

  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users'));
    }
    return UserArray.find(p => p.username === user.username && p.password === user.password);
  }
}
