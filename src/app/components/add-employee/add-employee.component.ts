import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { employee } from './employee';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  departments=[];
  jobs=[];
  leaveCodes=[];
  validateForm!: FormGroup;
  id

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder, private service: MainServiceService, private message: NzMessageService,private router:Router,private activateRoute:ActivatedRoute) {}
  addEmployee = new employee;

  ngOnInit(): void {
    this.validation();
    this.getDepartments();
    this.getJobs();
    this.getLeaveCode();
    this.getById();
  }

  validation(){
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      mobNum: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],
      pay: [null, [Validators.required]],
      resume: [null, [Validators.required]],
      allowances: [null, [Validators.required]],
      department: [null, [Validators.required]],
      jobs: [null,[Validators.required]],
      leavecode: [null,[Validators.required]]

    });
  }
  postEmployee(){
    if(!this.id){
   console.log(this.addEmployee)
   this.service.postEmployee(this.addEmployee).subscribe(d=>{
   this.message.success("Employee Added Successfully",{nzDuration:3000})
   this.erasingFields();

 })
  }
  if(this.id){
    this.service.updateEmployee(this.id,this.addEmployee).subscribe(d=>{
      this.message.success("Employee Updated Successfully",{nzDuration:3000})
      this.erasingFields();
    })
  }
  }

  erasingFields(){
    this.addEmployee.name="";
    this.addEmployee.mobileNumber=null;
    this.addEmployee.email="";
    this.addEmployee.address="";
    this.addEmployee.pay=null;
    this.addEmployee.resume="";
    this.addEmployee.allowances=null;
    this.addEmployee.department="";
    this.addEmployee.job="";
    this.addEmployee.leavecode=""
  }

  getDepartments(){
    this.service.getDepartments().subscribe(d=>{
      this.departments=d;
    })
  }

  getJobs(){
    this.service.getJob().subscribe(d=>{
       this.jobs=d;
    })
  }

  getLeaveCode(){
    this.service.getLeaveCode().subscribe(d=>{
       this.leaveCodes=d;
    })
  }

  getEmployeeById(){
    this.service.getEmployeeByID(this.id).subscribe(d=>{
      this.addEmployee.name = d.name;
      this.addEmployee.mobileNumber=d.mobileNumber;
      this.addEmployee.email=d.email;
      this.addEmployee.address=d.address;
      this.addEmployee.pay=d.pay;
      this.addEmployee.resume=d.resume;
      this.addEmployee.allowances=d.allowances;
      this.addEmployee.department=d.department;
      this.addEmployee.job = d.job;
    })
  }
  getById(){
    this.id= this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.getEmployeeById();
    }
  }
 
}
