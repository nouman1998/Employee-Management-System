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
  dateOfJob;
  ngOnInit(): void {
  
    this.id = this.activateRouter.snapshot.params['id'];
    this.service.getEmployeeByID(this.id).subscribe(d => {
      this.data = d.result;
      this.dateOfJob=this.data.dateOfEntry;
      this.calculateDays();



    })
  }
  year
  days;
  week
  calculateDays() {
     let today = new Date();
     console.log(today);
     console.log(this.dateOfJob);
     let secondDate = new Date(this.dateOfJob);
     var Difference_In_Time = today.getTime() - secondDate.getTime(); 
     var Difference_In_Days = Math.floor( Difference_In_Time / (1000 * 3600 * 24)); 
    // var Difference_In_Days=731
    //  console.log(Difference_In_Days);
     this.year = Math.floor( Difference_In_Days / 365); 
		// this.week = Math.floor((Difference_In_Days % 365) /7); 
    this.days = Math.floor((Difference_In_Days % 365) % 7);
    console.log(this.year);
    console.log(this.week) 
    console.log(this.days);
     console.log(secondDate); 

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
