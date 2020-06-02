import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { employee } from './employee';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }
  constructor(private fb: FormBuilder, private service: MainServiceService, private message: NzMessageService) {}
  addEmployee = new employee;

  ngOnInit(): void {
    this.validation();
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
    });
  }
  postEmployee(){
   console.log(this.addEmployee)
   this.service.postEmployee(this.addEmployee).subscribe(d=>{
   this.message.success("Employee Added Successfully",{nzDuration:3000})
 })
  }
}
