import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserComponent } from './user.component';
import {ResetComponent} from "./reset/reset.component";
import {ResetPasswordDoneComponent} from "./reset-password-done/reset-password-done.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path: '',
    component: UserComponent,
    children: [
<<<<<<< HEAD
      {path:"signin",component:SignInComponent},
      {path:"reset",component:ResetComponent},
      {path:"reset-password-done",component:ResetPasswordDoneComponent},
      {path:"register",component:RegisterComponent},
=======
      {path:"signin",component:SignInComponent}
>>>>>>> ea09540995da44f5173cec1571789c7f55553326
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
