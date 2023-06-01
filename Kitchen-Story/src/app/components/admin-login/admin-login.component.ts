import { Component } from '@angular/core';
import { faAutomobile,faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  /** fonts for admin login page. property binding on template */
  faAutomobile=faAutomobile;
  faUnlock=faUnlock;

  constructor(){};

  /** reactive form implementation here  */
  groupForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
    password:new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
  });

  /** Accessors and Mutators i.e getters and setters */
  getEmail():any{
    return this.groupForm.get('email');
  }
  getPassword():any{
     return this.groupForm.get('password');
  }

  /** method for verification to see values being sent*/
   verify():any{
    console.warn(this.groupForm.value);
    this.clearCredentials();
   }
   /** function to clear input fields in admin page */
   clearCredentials():any{
    return this.groupForm.reset();
   }

}
