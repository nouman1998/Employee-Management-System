import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { job } from './job';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss']
})
export class AddJobComponent implements OnInit {

  id
  validateForm!: FormGroup;
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder, private service : MainServiceService,private message: NzMessageService, private activateRoute: ActivatedRoute) { }
 
  addjob = new job();
  
  ngOnInit(): void {
    this.validation();
    this.getById();
  }
  validation(){
    this.validateForm = this.fb.group({
      jobcode: [null, [Validators.required]],
      jobtitle: [null, [Validators.required]],
      jobrole: [null, [Validators.required]],
      jobduties: [null, [Validators.required]],
      jobdescription: [null, [Validators.required]]
    });
  }

  postJob(){
    if(!this.id){
    this.service.postJob(this.addjob).subscribe(d=>{
      this.message.success("Job Added Successfully",{nzDuration:3000})
    })
    this.erasingFields();
  } else if(this.id){
    this.service.updateJob(this.id,this.addjob).subscribe(d=>{
      this.message.success("Job Updated Successfully",{nzDuration:3000})
    })
    this.erasingFields();
  }

  }

  getById(){
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.getJobById();
    }
  }
  getJobById(){
    this.service.getJobById(this.id).subscribe(d=>{
      this.addjob.jobCode=d.result.jobCode;
      this.addjob.jobTitle=d.result.jobTitle;
      this.addjob.jobRole = d.result.jobRole;
      this.addjob.jobDuties = d.result.jobDuties;
      this.addjob.jobDescription = d.result.jobDescription;
    })
  }

  erasingFields(){
    this.addjob.jobCode="";
    this.addjob.jobTitle="";
    this.addjob.jobRole="";
    this.addjob.jobDuties="";
    this.addjob.jobDescription="";
  }


}
