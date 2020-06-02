import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainScreenEmpComponent } from './components/main-screen-emp/main-screen-emp.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { ListDepartmentComponent } from './components/list-department/list-department.component';


const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'main',component:MainScreenComponent ,children:[
    {path:'',component:MainDashboardComponent},
    {path:'add-user',component:AddEmployeeComponent},
    {path:'list-emp',component:ListEmployeeComponent},
    {path:'add-dept',component:AddDepartmentComponent},
    {path:'list-dept',component:ListDepartmentComponent},
    {path:'add-dept/:id',component:AddDepartmentComponent}
  ]},
  {path:'mainemp',component:MainScreenEmpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
