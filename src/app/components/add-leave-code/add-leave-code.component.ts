import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';
import { leaveCode } from './leaveCode';

@Component({
  selector: 'app-add-leave-code',
  templateUrl: './add-leave-code.component.html',
  styleUrls: ['./add-leave-code.component.scss']
})
export class AddLeaveCodeComponent implements OnInit {

  id
  validateForm!: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private service : MainServiceService,private message: NzMessageService, private activateRoute: ActivatedRoute) { }
   
  addLeave= new leaveCode();

  ngOnInit(): void {
    this.validation();
    this.getById();
  }

  validation(){
    this.validateForm = this.fb.group({
      leavecode: [null, [Validators.required]],
      maxleaves: [null, [Validators.required]],
    
    });
  }

  postLeaveCode(){
    if(!this.id){
      this.service.postLeaveCode(this.addLeave).subscribe(d=>{
        this.message.success("Leave Code Added Successfully",{nzDuration:3000})
      })
      this.erasingFields();
    }
    else if(this.id){
      this.service.updateLeaveCode(this.id,this.addLeave).subscribe(d=>{
        this.message.success("Leave Code Updated Successfully",{nzDuration:3000})
      })
      this.erasingFields();
    }
  }

  erasingFields(){
    this.addLeave.leaveCode="";
    this.addLeave.maxLeaves="";
  } 

  getById(){
    this.id= this.activateRoute.snapshot.params['id'];
    if(this.id){
     this.getLeaveCodeById();
    }
  }
  getLeaveCodeById(){
   this.service.getLeaveCodeById(this.id).subscribe(d=>{
     console.log("LeaveCode:",d);
     this.addLeave.leaveCode=d.result.leaveCode;
     this.addLeave.maxLeaves=d.result.maxLeaves;
   })
  }

}
