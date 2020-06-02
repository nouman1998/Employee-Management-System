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
  private getEmpListsURL= this.baseurl+'employees'
  private postEmpURL= this.baseurl+'employees'
  private postDepartmentURL= this.baseurl+'department';
  private getDepartmentURL = this.baseurl+'department';
  private deleteDepartmentURL=this.baseurl+'department/';
  private getDepartmentByIdURL = this.baseurl+'department/';

  public getLoginCriedential():Observable<any>{
    return this.http.get(this.getLoginCriedentialsURL);
  }
  public getEmpList():Observable<any>{
    return this.http.get(this.getEmpListsURL); 
  }
  public postEmployee(obj):Observable<any>{
    return this.http.post(this.postEmpURL,obj);
  }

  public postDepartment(obj):Observable<any>{
    return this.http.post(this.postDepartmentURL,obj);
  }

  public getDepartments():Observable<any>{
    return this.http.get(this.getDepartmentURL);
  }

  public deleteDepartment(id):Observable<any>{
    return this.http.delete(this.deleteDepartmentURL+id);
  }
  public getDepartmentByID(id):Observable<any>{
    return this.http.get(this.getDepartmentByIdURL+id);
  }

  public updateDepartment(id,obj):Observable<any>{
    return this.http.put(this.deleteDepartmentURL+id,obj);
  }

}
