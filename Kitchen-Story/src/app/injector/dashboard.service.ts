import { Injectable, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements OnInit{

  constructor(private auth:AuthService,private http:HttpClient,private route:Router) {};

   endpoints!:EndPoints;

  ngOnInit(): void {
    this.endpoints={
      url:'http//:localhost:7020/getlistofproducts',
      method:'GET',
    }
  }
   
  /** log out function */
  exitDashboard():any{
    return this.auth.logOut();
  }

  /** getList of products */
  dataListForProducts():any{
    if(this.endpoints.url.endsWith('getlistofproducts') && this.endpoints.method.match('GET')){
     if(this.http.get(this.endpoints.url)!=null){
        this.route.navigateByUrl('productpage');
     }else{
       this.route.navigateByUrl('noproduct') /** TODO: to improve this page component */
     } 
    }else{
      window.alert('Endpoints might have moved');
    }
  }
}

/** model for url(s) */
export interface EndPoints{
  url:string,
  method:string,
}


 



