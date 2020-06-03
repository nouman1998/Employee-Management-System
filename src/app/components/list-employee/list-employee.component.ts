import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  
  listOfData 


  constructor(private service:MainServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList(){
    this.service.getEmpList().subscribe(d=>{this.listOfData=d});
  }
  editEmployee(id){
    this.router.navigate([`main/add-user/${id}`]);
  }
  deleteEmployee(id){
    this.service.deleteEmployee(id).subscribe();
    this.listOfData=this.listOfData.filter(d=>d.id!=id);
  }
    

}
