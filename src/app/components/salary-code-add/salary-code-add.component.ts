import { Component, OnInit } from '@angular/core';
import { Salary } from './salary';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { NzButtonSize, NzSelectSizeType, NzMessageService } from 'ng-zorro-antd';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { get } from 'http';

@Component({
  selector: 'app-salary-code-add',
  templateUrl: './salary-code-add.component.html',
  styleUrls: ['./salary-code-add.component.scss']
})
export class SalaryCodeAddComponent implements OnInit {
  validateForm: FormGroup
  constructor(private fb: FormBuilder, private service: MainServiceService, private rotuer: Router, private message: NzMessageService, private activateRoute: ActivatedRoute) { }
  size: NzButtonSize = 'large';
  salaries = new Salary();
  foreignKey
  id
  ngOnInit(): void {
    // console.log(this.array);

    this.getByID();


    this.validateForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],

      allowances: this.fb.array([


      ])

    });






    this.getForeignKeyValue();


  }

  getByID() {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.getSalaryCode();
    }

  }
  index;
  getSalaryCode() {
    this.counter = 0
    this.index = 0;
    this.formValues=[];
    this.service.getSalaryCodeById(this.id).subscribe(d => {
      d = d.result;
      this.salaries.basicSalary = d.basicSalary;
      this.salaries.code = d.code;
      this.salaries.codeDescription = d.codeDescription;
      this.salaries.grossAmount = d.grossAmount;

      d.allowances.map(e => {
        this.Add();

      });
      debugger;
      // this.validateForm.value.allowances.map(f => {
      //   f.preFrequency=d.allowances[this.index].preFrequency;
      //   f.amountType=d.allowances[this.index].amountType;
      //   f.amount=d.allowances[this.index].amount;
      //   this.index++;
      // });

      for (let data of this.allowances.controls) {
        let obj = { preFrequency: d.allowances[this.index].preFrequency, amountType: d.allowances[this.index].amountType, amount: d.allowances[this.index].amount }
        // console.log("Data Lelo ", this.validateForm.get(['allowances', this.counter]).value);
        this.formValues.push(obj);
        data.setValue(obj);
        this.index++;
      }
      console.log(this.allowances);
    })
  }
  getForeignKeyValue() {
    this.service.getSalaryCodes().subscribe(d => this.foreignKey = d.length);
  }


  public get allowances() {
    const array = (this.validateForm.get('allowances') as FormArray);
    return array;
  }

  sizeSelect: NzSelectSizeType = 'large';
  counter = 0;
  formValues = []
  submit() {
    if (this.id) {
      this.salaries.allowances = this.formValues;
      console.log(this.salaries);
      this.service.updateSalaryCode(this.id,this.salaries).subscribe(d => {
        this.message.success("Salary Updated Sucessfully", { nzDuration: 3000 })
      });

    }

    else {
      console.log(this.formValues);
      this.salaries.allowances = this.formValues;
      console.log(this.salaries);
      this.service.postSalaryCode(this.salaries).subscribe(d => {
        this.message.success("Salary Added Sucessfully", { nzDuration: 3000 })
      });

    }
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
    else if ((!this.formValues || this.formValues.length === 0) && this.salaries.basicSalary) {
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
