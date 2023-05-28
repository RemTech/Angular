import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

/** this service is for Search Component service */
export class SearchServiceService {
 
 public url!:URL;
 public responseType!:ResponseType;

  constructor(private http:HttpClient) {}
    
   /** get Products function */
   getProducts(data:any):any{
    for(let i=0; i<this.url.URI.length; i++){
      if(this.url.http_method.match('GET') && this.url.URI.endsWith('getProducts')){
        this.http.get(this.url.URI[i],data);
      }
      else{
          window.alert('endpoint not found'); /** BOM object **/
          console.log('End point Not Found');
      }
    }
   }
   
}
 
/** URL for REST Services */
/** HTTP Methods */
const url:URL[]=[
  {URI:'http//localhost:7180/getProducts',http_method:'GET'},
  {URI:'http//localhost:7180/postProducts',http_method:'POST'}
]

export interface URL{
  URI:string;
  http_method:string;
}