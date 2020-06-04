import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  isCollapsed = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  } 
  navigateToAddComponent(){
    this.router.navigate(['main/add-user']);
  }
  navigateToListComponent(){
    this.router.navigate(['main/list-emp'])
  }
  navigateToAddDepartment(){
    this.router.navigate(['main/add-dept'])
  }
  navigateToListDepartment(){

    this.router.navigate(['main/list-dept'])
  }
  navigateToAddJob(){
    this.router.navigate(['main/add-job'])
  }
  navigateToListJob(){
    this.router.navigate(['main/list-job'])
  }

}
