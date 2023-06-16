import { CanActivateFn } from '@angular/router';
import { AuthService } from '../injector/auth.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map } from 'rxjs';

/** functional auth.guard new in angular > 15  */
export const authGuard: CanActivateFn = (route, state) => {
   
  const auth=inject(AuthService);
  const routez=inject(Router);
  
  if(!auth.accessedLevel()){
    routez.navigate(['login']);
    return false;
  }
     return auth.accessedLevel();

};


