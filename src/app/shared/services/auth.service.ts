import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authenticated :boolean = false;

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(this._authenticated);

  set authenticated(value: boolean){
    this._authenticated = value;
    this.authenticated$.next(this._authenticated);
  }

  get authenticated(){
    return this._authenticated;
  }

  constructor(private http:HttpClient) {
    if(this.getTocken()){
      this.authenticated = true;
    }
  }

  getTocken(){
    return localStorage.getItem('token');
  }

  login(username: string, password: string){
     this.http.post(`${environment.authEndPoint}`,{username,password})
     .subscribe((data:any) => {
       console.log("DATA",data);
       localStorage.setItem("token",data.token);
       this.authenticated = true;
     })
   }
  logout(){
   localStorage.clear();
   this.authenticated = false; //calls setter, publish false
  }

}