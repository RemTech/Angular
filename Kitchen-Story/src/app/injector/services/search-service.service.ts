import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

/** this service is for Search Component service */
export class SearchServiceService implements OnInit {
 
  url!:URL;
 public responseType!:ResponseType;

  constructor(private http:HttpClient,private route:Router) {};

  ngOnInit(): void {
     this.url={
      URI0:'http//localhost:7180/getProducts',
      http_method0:'GET',
      URI1:'http//localhost:7180/postProducts',
      http_method1:'POST',
     }
  }
    
   /** get Products function */
   getProducts(data:any):any{
      if(this.url.URI0.includes('getProducts')){
         if(this.http.get(this.url.URI0)!= null){
             return this.route.navigateByUrl('productpage');
         }   
      }
      else{
            return this.route.navigate(['/noproducts']);  /** TODO: to develop the noproduct component */
      }
    }
   }
   
 /** model for URL(s) */
export interface URL{
  URI0:string; URI1:string;
  http_method0:string;http_method1:string;
}