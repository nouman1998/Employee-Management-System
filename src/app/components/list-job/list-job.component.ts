import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.scss']
})
export class ListJobComponent implements OnInit {

  listOfData

  constructor(private service: MainServiceService, private message : NzMessageService, private router: Router) { }

  ngOnInit(): void {
    this.getJob();
  }

  getJob(){
    this.service.getJob().subscribe(d=>{
      this.listOfData=d.result;
    })
  }

  editJob(id){
     this.router.navigate([`main/add-job/${id}`])
  }
  deleteJob(id){
   this.service.deleteJob(id).subscribe(d=>{
    this.message.success("Job Deleted Successfully",{nzDuration:3000})
   })
   this.listOfData=this.listOfData.filter(d=>d.id!=id);

  }

}
