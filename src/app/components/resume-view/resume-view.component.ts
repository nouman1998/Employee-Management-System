import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resume-view',
  templateUrl: './resume-view.component.html',
  styleUrls: ['./resume-view.component.scss']
})
export class ResumeViewComponent implements OnInit {

  constructor(private service:MainServiceService,private activateRoute:ActivatedRoute,private router:Router) { }
pdfSrc;
id
  ngOnInit(): void {
    this.id= this.activateRoute.snapshot.params['id'];
    this.service.getEmployeeByID(this.id).subscribe(d=>{
      this.pdfSrc=d.result.resume;
      console.log(d.resume);
      this.flag=true;
    })
   

  }
flag=false;
 


backtoEmpList(){
  this.router.navigate(['main/list-emp'])
}
}
