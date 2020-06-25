import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainServiceService } from '../services/main-service.service';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './personal-dashboard.component.html',
  styleUrls: ['./personal-dashboard.component.scss']
})
export class PersonalDashboardComponent implements OnInit {

  constructor(private activateRouter: ActivatedRoute, private router: Router, private service: MainServiceService) { }
  id
  data
  ngOnInit(): void {

    this.id = this.activateRouter.snapshot.params['id'];
    this.service.getEmployeeByID(this.id).subscribe(d => {
      this.data = d.result;

    })
  }
 gridStyle = {
    width: '50%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };


  gridStyle2 = {
    width: '33.33%',
    textAlign: 'center',
    backgroundColor:'rgb(41, 98, 204)',
    color:'white'
  };

  viewResume(id){
    this.router.navigate(['main/resume-view/'+id])
  }
}
