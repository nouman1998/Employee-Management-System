import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.scss']
})
export class ListDepartmentComponent implements OnInit {

  constructor(private service:MainServiceService,private router:Router) { }
  data
  ngOnInit(): void {
    this.getDepartmentList();
  }

  getDepartmentList(){
    this.service.getDepartments().subscribe(d=>{


      this.data=d.result;
  })
  }

  editDepartment(id){
    this.router.navigate([`main/add-dept/${id}`]);
  }
  deleteDepartment(id){
    this.service.deleteDepartment(id).subscribe();
    this.data=this.data.filter(d=>d.id!=id);
  }

}
