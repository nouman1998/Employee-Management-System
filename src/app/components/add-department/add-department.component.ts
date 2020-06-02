import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Department } from './department';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageComponent, NzMessageService } from 'ng-zorro-antd';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
constructor(private service:MainServiceService,private fb: FormBuilder,private message: NzMessageService,private activateRoute:ActivatedRoute){}
validateForm!: FormGroup;
id
  depart = new Department();
  ngOnInit(){

    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
    
      this.getDepartments();


    }

    
    this.validateForm = this.fb.group({
      userName: [ [Validators.required]],
      password: [ [Validators.required]],
     
    });




  }
  getDepartments() {
    this.service.getDepartmentByID(this.id).subscribe(d=>{
      this.depart.name=d.name;
      this.depart.description=d.description;
    })
  }
  submitForm(){
    if(!this.id){
this.service.postDepartment(this.depart).subscribe(d=>{
    this.message.success("Department Added Sucessfully",{nzDuration:3000});
    this.depart.name="";
    this.depart.description="";
});
    }

    else if(this.id){
      this.service.updateDepartment(this.id,this.depart).subscribe(d=>{
        this.message.success("Department Updated Sucessfully",{nzDuration:3000});
        this.depart.name="";
        this.depart.description="";
      })
    }
  }

  validate(){
   if(this.depart.name===""&&this.depart.description==="")
   {
     return true
   }
   else{
     return false;
   }
  }

  
}
