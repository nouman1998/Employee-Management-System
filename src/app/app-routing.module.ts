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

import { SalaryCodeAddComponent } from './components/salary-code-add/salary-code-add.component';
import { SalaryCodeListComponent } from './components/salary-code-list/salary-code-list.component';

import { AddJobComponent } from './components/add-job/add-job.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { AddLeaveCodeComponent } from './components/add-leave-code/add-leave-code.component';
import { ListLeaveCodeComponent } from './components/list-leave-code/list-leave-code.component';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';



const routes: Routes = [
  {path:'',component:LoginPageComponent},
  {path:'main',component:MainScreenComponent , 
  children:[
    {path:'',component:MainDashboardComponent},
    {path:'add-user',component:AddEmployeeComponent},
    {path:'list-emp',component:ListEmployeeComponent},
    {path:'add-dept',component:AddDepartmentComponent},
    {path:'list-dept',component:ListDepartmentComponent},
    {path:'add-dept/:id',component:AddDepartmentComponent},
    {path:'salary-add',component:SalaryCodeAddComponent},
    {path:'salary-list',component:SalaryCodeListComponent},
    {path:'salary-add/:id',component:SalaryCodeAddComponent},
    {path: 'add-user/:id', component: AddEmployeeComponent},
    {path: 'add-job', component: AddJobComponent},
    {path:'list-job', component: ListJobComponent},
    {path:'add-job/:id',component:AddJobComponent},
    {path:'add-leaveCode',component:AddLeaveCodeComponent},
    {path:'list-leaveCode',component:ListLeaveCodeComponent},
    {path:'add-leaveCode/:id',component:AddLeaveCodeComponent},
    {path:'resume-view/:id',component:ResumeViewComponent},
  

  ]},
  {path:'personal/:id',component:PersonalDashboardComponent},
  {path:'mainemp',component:MainScreenEmpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
