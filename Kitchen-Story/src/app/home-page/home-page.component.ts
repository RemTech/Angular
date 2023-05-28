import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

  public company!:Company;

  constructor(){}

  /** implementation of the interface for company Name Title */
  ngOnInit(): void {
    this.company={
      name:"KitchenStory",
    }
  }
  
  /** picture arrays to hold the .jpg files for the carousel **/
   pictures:any=[
     {name:'./assets/foodItem1.jpg',caption:'Spicy'},
     {name:'./assets/foodItem2.jpg',caption:'Sweet'},
     {name:'./assets/foodItem3.jpg',caption:'Delicious'},
     {name:'./assets/foodItem4.jpg',caption:'Spectacular'},
     {name:'./assets/foodItem5.jpg',caption:'Palatable'},
   ];

}

/** interface to hold the company name model */
export interface Company{
  name:string;
}


