import { Component, OnInit } from '@angular/core';
import { Salary } from './salary';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NzButtonSize, NzSelectSizeType } from 'ng-zorro-antd';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';
// import { get } from 'http';

@Component({
  selector: 'app-salary-code-add',
  templateUrl: './salary-code-add.component.html',
  styleUrls: ['./salary-code-add.component.scss']
})
export class SalaryCodeAddComponent implements OnInit {
  validateForm: FormGroup
  constructor(private fb: FormBuilder,private service:MainServiceService,private rotuer:Router) { }
  size: NzButtonSize = 'large';
  salaries = new Salary();
  ngOnInit(): void {
    // console.log(this.array);
    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],

      allowances: this.fb.array([


      ])

    });







  }


  public get allowances() {
    const array = (this.validateForm.get('allowances') as FormArray);
    return array;
  }

  sizeSelect: NzSelectSizeType = 'large';
  counter = 0;
  formValues = []
  submit() {
    console.log(this.salaries);
    
    // this.salaries.allowances=this.formValues;
    console.log(this.salaries); 
    this.service.postSalaryCode(this.salaries).subscribe();

    this.formValues.map(d=>{
      this.service.postAllowances(d).subscribe();
    })

  }

  amount = 0;
  gettingValuesFromDynamicForms() {
    debugger
    this.formValues = [];
    this.counter = 0;
    this.amount = 0;
    for (let data of this.allowances.controls) {
      console.log("Data Lelo ", this.validateForm.get(['allowances', this.counter]).value);
      this.formValues.push(this.validateForm.get(['allowances', this.counter]).value)
      this.counter = this.counter + 1;
    }
    console.log(this.formValues)
    this.formValues.map(d => {
      if (d.amount) {
        this.amount += parseInt(d.amount);
      }

    })
    if (this.salaries.basicSalary && this.formValues.length != 0) {
      console.log(" if")
      this.salaries.grossAmount = this.amount + ((this.salaries.basicSalary));
    }
    else if ((!this.formValues||this.formValues.length === 0)&&this.salaries.basicSalary) {
      console.log("else if")
      this.salaries.grossAmount = this.salaries.basicSalary;
    }
    else {
      console.log("else ")
      this.salaries.grossAmount = this.amount
    }
  }
  Add() {


    this.allowances.push(this.fb.group({
      preFrequency: ['', [Validators.required]],
      amountType: ['', [Validators.required]],
      amount: ['', [Validators.required]]
    }));
    console.log(this.validateForm.controls)




  }
  

}
