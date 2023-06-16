import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) {};

  /*
  TODO: to work on this implementation at some point.
  user$=new BehaviorSubject<{email:any,password:any}|null|undefined>(undefined);
  */
 
setCredentials(credentials:any):void{
  localStorage.setItem('credential',credentials);
}

getCredentials():any{
  return localStorage.getItem('credential');
}

accessedLevel():any{
  return this.getCredentials()!=null;
}

gainAccess({email,password}:any):Observable<any>{
  if(email=='admin@angular.com' && password=='TestAppTest'){  
   this.setCredentials('testTokenIsValid') ; 
  return of({name:'admin',email:'admin@angular.com'}); 
}
 return throwError(()=>'wrong username or password');
}

/*  
  TODO: to work on this implementation at some point
setUser():any{
  if(localStorage.getItem('token')){
    this.user$.next({email:'admin@angular.com',password:'TestAppTest'});
  }else{
    this.user$.next(null);
  }
} */

logOut():any{
  localStorage.removeItem('credential');
  this.route.navigate(['login']);
}

}
