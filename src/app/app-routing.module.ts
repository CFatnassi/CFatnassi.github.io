import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { PlanningComponent } from './planning/planning.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
const routes: Routes=[
  {path: 'Features', component:FeaturesComponent},
  {path: 'Planning', component:PlanningComponent,canActivate:[AuthGuard]},
  {path: 'Contact', component:ContactComponent,canActivate:[AuthGuard]},
  {path: 'Login', component:LoginComponent},
  {path: 'Register', component:RegisterComponent},
  {path: 'Logout', component:LoginComponent,canActivate:[AuthGuard]},
  {path: '', component:LoginComponent},
  {path:'**', component: NotFoundComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ 
  FeaturesComponent,
  LoginComponent,
  PlanningComponent,
  ContactComponent,
  RegisterComponent,
  LogoutComponent]