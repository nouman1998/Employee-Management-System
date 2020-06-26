import { Component, OnInit } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { main } from './main';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-main-screen-emp',
  templateUrl: './main-screen-emp.component.html',
  styleUrls: ['./main-screen-emp.component.scss']
})
export class MainScreenEmpComponent implements OnInit {

  isVisible = false;
  mainAttendanceObj = new main();

  constructor(private modalService: NzModalService, private service:MainServiceService, private message: NzMessageService) { }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
    console.log(this.mainAttendanceObj)
    this.service.postAttendance(this.mainAttendanceObj).subscribe(d=>{
      if(d.status == 200){
        this.message.success("Attendance Successfully Marked!", { nzDuration: 3000 })
      }
      else{
        this.message.info("Attendance Already Marked!",{nzDuration:3000})
      }
    })

    this.mainAttendanceObj.employeeId=null;
    this.mainAttendanceObj.name="";
    this.mainAttendanceObj.attendance="";

  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // showConfirm(): void {
  //   this.modalService.confirm({
  //     nzTitle: 'Confirm',
  //     nzContent: 'Bla bla ...',
  //     nzOkText: 'OK',
  //     nzCancelText: 'Cancel'
  //   });
  // }

}
