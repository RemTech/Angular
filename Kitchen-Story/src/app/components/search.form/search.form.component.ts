import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSquare, faPersonCircleCheck,faCheck } from '@fortawesome/free-solid-svg-icons';
import { SearchServiceService } from '../../injector/services/search-service.service';


@Component({
  selector: 'app-search-form',
  templateUrl: './search.form.component.html',
  styleUrls: ['./search.form.component.css'],
  providers:[SearchServiceService]
})
export class SearchFormComponent implements OnInit {

  public foodItem!:FoodItems;
  
  constructor(private serve:SearchServiceService){
  }

  ngOnInit(): void {
    this.foodItem={
      food:"",
      price:"",
    };
  }
     
  /** icon array for fontawesome library of icons. Added to array include and use on template */
   pics:any[]=[faCoffee,faSquare,faPersonCircleCheck,faCheck];
  

  // search text method to test data sent
    getSearchText(find:any):any{
    console.log(find);
  }

  /** search specific data from service class (injector) in the endpoint address */
    getProductFromDB(data:any):any{
    this.serve.getProducts(data);
  }

}

/** food model for data */
export class FoodItems{

  public food:string;
  public price:any;

  constructor(food:string,price:any){
    this.food=food;
    this.price=price;
}

}
/** interface to hold the model */
interface Data{
  productName:string;
}

