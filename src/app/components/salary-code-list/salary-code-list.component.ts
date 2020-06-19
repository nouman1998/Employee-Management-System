import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-code-list',
  templateUrl: './salary-code-list.component.html',
  styleUrls: ['./salary-code-list.component.scss']
})
export class SalaryCodeListComponent implements OnInit {

  constructor(private service:MainServiceService,private router:Router) { }
data
  ngOnInit(): void {


    this.service.getSalaryCodes().subscribe(d=>this.data=d.result);
  }

  
  
  editSalaryCode(id){
    this.router.navigate([`main/salary-add/${id}`]);  
  }
  deleteSalaryCode(id){
    this.service.deleteSalaryCode(id).subscribe();
      this.data=this.data.filter(d=>d.id!=id);
  }
}
