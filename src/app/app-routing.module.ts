import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainScreenEmpComponent } from './components/main-screen-emp/main-screen-emp.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'main',component:MainScreenComponent},
  {path:'mainemp',component:MainScreenEmpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
