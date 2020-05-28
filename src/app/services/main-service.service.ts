import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }

  private baseurl:String="http://localhost:3000/";

  private getLoginCriedentialsURL =this.baseurl+"login";

  public getLoginCriedential():Observable<any>{
    return this.http.get(this.getLoginCriedentialsURL);
  }


}
