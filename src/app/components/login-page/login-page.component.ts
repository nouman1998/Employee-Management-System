import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { login } from './login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private service: MainServiceService, private route: Router) { }
  login = new login();
  LoginInfo;
  isLogin = false;;

  ngOnInit(): void {
    this.service.getLoginCriedential().subscribe(d => {
      console.log("Data:+++++", d);
      this.LoginInfo = d;


    })

  }
  loginSubmit() {
    this.isLogin = false;
    console.log(this.login.username);
    console.log(this.login.password);
    console.log(this.LoginInfo)
    this.LoginInfo.map(e => {

      if (this.login.username === e.username && this.login.password === e.password && e.role === "ADMIN" && !this.isLogin) {
        this.route.navigate(['main']);
        this.isLogin = true;
      }
      else if (this.login.username === e.username && this.login.password === e.password && e.role === "EMP" && !this.isLogin) {
        this.route.navigate(['mainemp']);
        this.isLogin = true;
      }


    });

    if (!this.isLogin) {
      alert("Wrong Username or Password");
    }


  }

}
