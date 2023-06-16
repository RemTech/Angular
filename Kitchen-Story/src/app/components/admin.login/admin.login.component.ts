import { Component, OnInit } from '@angular/core';
import { faAutomobile,faUnlock } from '@fortawesome/free-solid-svg-icons';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from 'src/app/injector/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin.login.component.html',
  styleUrls: ['./admin.login.component.css']
})
export class AdminLoginComponent implements OnInit{

  /** fonts for admin login page. property binding on template */
  faAutomobile=faAutomobile;
  faUnlock=faUnlock;

  constructor(private auth:AuthService,private route:Router){};

  /** avoidance of backpaging on the logged session. */
  ngOnInit(): void {
     setTimeout(()=>{
      if(this.auth.accessedLevel()){
        this.route.navigateByUrl('dashboard');
      }
     },1);
  }

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

  /** method for verification to log in to admin dashboard*/
   verify():any{
    console.log(this.groupForm.value);
    if(this.groupForm.valid){
       this.auth.gainAccess(this.groupForm.value).subscribe((result)=>{
         console.log(result)
          this.route.navigate(['dashboard']);   
       }, 
       (error)=>{
         window.alert(error);
       }
       );
    }
    this.clearCredentials();
   }

   /** function to clear input fields in admin page */
   clearCredentials():any{
    return this.groupForm.reset();
   }

}

