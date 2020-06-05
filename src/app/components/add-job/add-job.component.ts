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
      this.addjob.jobcode=d.jobcode;
      this.addjob.jobtitle=d.jobtitle;
      this.addjob.jobrole = d.jobrole;
      this.addjob.jobduties = d.jobduties;
      this.addjob.jobdescription = d.jobdescription;
    })
  }

  erasingFields(){
    this.addjob.jobcode="";
    this.addjob.jobtitle="";
    this.addjob.jobrole="";
    this.addjob.jobduties="";
    this.addjob.jobdescription="";
  }


}
