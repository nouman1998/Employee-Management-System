import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-leave-code',
  templateUrl: './list-leave-code.component.html',
  styleUrls: ['./list-leave-code.component.scss']
})
export class ListLeaveCodeComponent implements OnInit {

  listOfData
  constructor(private service: MainServiceService, private message : NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.getLeaveCode();
  }

  editLeaveCode(id){
    this.router.navigate([`main/add-leaveCode/${id}`])
 }
 deleteLeaveCode(id){
  this.service.deleteLeaveCode(id).subscribe(d=>{
   this.message.success("Leave Code Deleted Successfully",{nzDuration:3000})
  })
  this.listOfData=this.listOfData.filter(d=>d.id!=id);

 }

 getLeaveCode(){
   this.service.getLeaveCode().subscribe(d=>{
     console.log("Data",d);
     this.listOfData=d.result;
   })
 }

}
