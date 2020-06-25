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

  departments = [];
  jobs = [];
  leaveCodes = [];
  validateForm!: FormGroup;
  id
  formData = new FormData();

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder, private service: MainServiceService, private message: NzMessageService, private router: Router, private activateRoute: ActivatedRoute) { }
  addEmployee = new employee;
  salaryCode
  ngOnInit(): void {
    
    // this.getByID();
    this.validation();
    this.getDepartments();
    this.getJobs();
    this.getLeaveCode();
    this.getSalaryCode();
    this.getById();

  }
  getByID(){
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
     this.getEmployee();
    }
  }
  getEmployee() {
    
    this.service.getEmployeeByID(this.id).subscribe(d=>{
      d=d.result;
      debugger
      this.addEmployee.name =d.name  ;
      this.addEmployee.mobileNumber = d.mobileNumber;
      this.addEmployee.email = d.email;
      this.addEmployee.address = d.address;
      this.addEmployee.pay=d.pay;
      this.addEmployee.resume = null
      // this.addEmployee.allowances=null;
      this.addEmployee.department = d.depart.name;
      console.log(d.depart.name);
      this.addEmployee.job = d.job.jobCode;
      console.log(d.job.jobCode);
      this.addEmployee.leavecode = d.leaveCode.leaveCode;


    })
  }
  getSalaryCode() {
    this.service.getSalaryCodes().subscribe(d => {
      this.salaryCode = d.result;
    })
  }

  validation() {
    this.validateForm = this.fb.group({
      name: [null], //[Validators.required]
      mobNum: [null],
      email: [null],
      address: [null],
      pay: [null, [Validators.required]],
      resume: [null],
      allowances: [null, [Validators.required]],
      department: [null],
      jobs: [null],
      leavecode: [null]
      , salaryCode: [null]
      ,image:[null],
      DOB:[null]

    });
  }
  postEmployee() {
    if (!this.id) {
      this.formData.append('name', this.addEmployee.name);
      this.formData.append('mobileNumber', (this.addEmployee.mobileNumber).toString());
      this.formData.append('email', this.addEmployee.email);
      this.formData.append('address', this.addEmployee.address);
      this.formData.append('pay', (this.addEmployee.pay));
      this.formData.append('resume', this.addEmployee.resume);
      this.formData.append('leaveCode', this.addEmployee.leavecode);
      this.formData.append('salaryCode', this.addEmployee.salaryCode)
      this.formData.append('depart', this.addEmployee.department);
      this.formData.append('job', this.addEmployee.job);
      this.formData.append('fname',this.addEmployee.father);
      this.formData.append('profile',this.addEmployee.profile);
      this.formData.append('dob',this.addEmployee.dob);
      debugger
      this.service.postEmployee(this.formData).subscribe(d => {
        this.message.success("Employee Added Successfully", { nzDuration: 3000 })
        this.erasingFields();

      })
    }
    if (this.id) {
      this.formData.append('name', this.addEmployee.name);
      this.formData.append('mobileNumber', (this.addEmployee.mobileNumber).toString());
      this.formData.append('email', this.addEmployee.email);
      this.formData.append('address', this.addEmployee.address);
      // this.formData.append('pay', (this.addEmployee.pay));
      this.formData.append('resume', this.addEmployee.resume);
      this.formData.append('leaveCode', this.addEmployee.leavecode);
      this.formData.append('salaryCode', this.addEmployee.salaryCode)
      this.formData.append('depart', this.addEmployee.department);
      this.formData.append('job', this.addEmployee.job);
      this.formData.append('fname',this.addEmployee.father);
      this.formData.append('profile',this.addEmployee.profile);
      this.formData.append('dob',this.addEmployee.dob);
      this.service.updateEmployee(this.id, this.addEmployee).subscribe(d => {
        this.message.success("Employee Updated Successfully", { nzDuration: 3000 })
        this.erasingFields();
      })
    }
  }

  erasingFields() {
    this.addEmployee.name = "";
    this.addEmployee.mobileNumber = null;
    this.addEmployee.email = "";
    this.addEmployee.address = "";
    this.addEmployee.pay=null;
    this.addEmployee.resume = null
    this.addEmployee.allowances=null;
    this.addEmployee.department = "";
    this.addEmployee.job = "";
    this.addEmployee.leavecode = ""
    this.addEmployee.profile=null;
    this.addEmployee.dob="";
    this.addEmployee.father="";

    this.formData.delete('name');
    this.formData.delete('mobileNumber');
    this.formData.delete('email');
    this.formData.delete('address');
    this.formData.delete('pay');
    this.formData.delete('resume');
    this.formData.delete('leaveCode');
    this.formData.delete('salaryCode')
    this.formData.delete('depart');
    this.formData.delete('job');

  }

  getDepartments() {
    this.service.getDepartments().subscribe(d => {
      this.departments = d.result;
    })
  }

  getJobs() {
    this.service.getJob().subscribe(d => {
      this.jobs = d.result;
    })
  }

  getLeaveCode() {
    this.service.getLeaveCode().subscribe(d => {
      this.leaveCodes = d.result;
    })
  }

  // getEmployeeById() {
  //   this.service.getEmployeeByID(this.id).subscribe(d => {
  //     this.addEmployee.name = d.name;
  //     this.addEmployee.mobileNumber = d.mobileNumber;
  //     this.addEmployee.email = d.email;
  //     this.addEmployee.address = d.address;
  //     // this.addEmployee.pay=d.pay;
  //     this.addEmployee.resume = d.resume;
  //     // this.addEmployee.allowances=d.allowances;
  //     this.addEmployee.department = d.department;
  //     this.addEmployee.job = d.job;
  //   })
  // }
  getById() {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getEmployee();
    }
  }












  handleCategoryBanner(files: FileList) {
    //console.log(files);
    this.addEmployee.resume = files[0]
    // this.Checker = true;


  }

  handleProfileBanner(files:FileList){ 
    this.addEmployee.profile=files[0];
  }


}
