import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private service:MainServiceService) { }

  ngOnInit(): void {
this.service.getEmpList().subscribe(d=>{this.listOfData=d});
  }
  listOfData 
    

}
