import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ConfirmationPageComponent } from './components/confirmation-page/confirmation-page.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { ForgotPasswordComponent } from './components/forgot.password/forgot.password.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent},
  {path:'confirm',component:ConfirmationPageComponent}, /** to add route guard to prevent unauthorised access  */
  {path:'admin',component:AdminLoginComponent}, /** to add route guard to prevent unauthorised access  */
  {path:'forgot_password', component:ForgotPasswordComponent},
  {path:'**',redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
