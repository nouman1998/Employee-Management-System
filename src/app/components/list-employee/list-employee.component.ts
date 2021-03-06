import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {
  
  listOfData 


  constructor(private service:MainServiceService, private router: Router, private message: NzMessageService) { }

  ngOnInit(): void {
    this.getEmpList();
  }
  getEmpList(){
    this.service.getEmpList().subscribe(d=>{this.listOfData=d.result});
  }
  editEmployee(id){
    this.router.navigate([`main/add-user/${id}`]);
  }
  deleteEmployee(id){
    this.service.deleteEmployee(id).subscribe(d=>{
      this.message.success("Employee Deleted Successfully",{nzDuration:3000})

    });
    this.listOfData=this.listOfData.filter(d=>d.id!=id);
  }
  ViewResume(data){
    
    
   this.router.navigate(['main/resume-view/'+data.id])
    
  }

  navigateToPersonalDashboard(id){
    this.router.navigate([`personal/${id}`]);
  }






  // isVisible = false;



  // showModal(): void {
  //   this.isVisible = true;
  // }

  // handleOk(): void {
  //   console.log('Button ok clicked!');
  //   this.isVisible = false;
  // }



  // handleCancel(): void {
  //   console.log('Button cancel clicked!');
  //   this.isVisible = false;
  // }


}
