import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  constructor( private router: Router, private activateRoute: ActivatedRoute, private service: MainServiceService) { }

  ngOnInit(): void {
    this.getTotalEmployeeCount();
    this.getTotalDepartmentCount();
    this.getTotalSalaryCodeCount();
    this.getTotalJobCodeCount();
    this.getTotalLeaveCodeCount();
    this.getTotalSumOfSalaries();
  }

  goToListEmployee(){
    this.router.navigate(['main/list-emp'])
  }

  goToListDepartment(){
    this.router.navigate(['main/list-dept'])
  }

  goToListSalaryCode(){
    this.router.navigate(['main/salary-list'])
  }

  goToListJobCode(){
    this.router.navigate(['main/list-job'])
  }
  
  goToListLeaveCode(){
    this.router.navigate(['main/list-leaveCode'])
  }

  employeeCount
  getTotalEmployeeCount(){
    this.service.getTotalEmployeeCount().subscribe(d=>{
      console.log("Count",d)
      this.employeeCount = d.result;
    })
  }

  departmentCount
  getTotalDepartmentCount(){
    this.service.getTotalDepartmentCount().subscribe(d=>{
      this.departmentCount=d.result;
    })
  }

  salaryCodeCount
  getTotalSalaryCodeCount(){
    this.service.getTotalSalaryCodeCount().subscribe(d=>{
      this.salaryCodeCount=d.result;
    })
  }

  jobCodeCount
  getTotalJobCodeCount(){
    this.service.getTotalJobCodeCount().subscribe(d=>{
      this.jobCodeCount=d.result;
    })
  }

  leaveCodeCount
  getTotalLeaveCodeCount(){
    this.service.getTotalLeaveCodeCount().subscribe(d=>{
      this.leaveCodeCount=d.result;
    })
  }

  totalSumOfSalaries
  getTotalSumOfSalaries(){
    this.service.getTotalSumOfSalaries().subscribe(d=>{
      this.totalSumOfSalaries=d.result;
    })
  }

}
