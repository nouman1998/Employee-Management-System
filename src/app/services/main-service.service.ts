import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }

  private baseurl:String="http://localhost:8080/api/";

  private getLoginCriedentialsURL =this.baseurl+"login";
  private getEmpListsURL= this.baseurl+'employees'
  private postEmpURL= this.baseurl+'employees'
  private deleteEmpURL = this.baseurl+'employees/'
  private getEmpByIdURL = this.baseurl+'employees/'
  private postDepartmentURL= this.baseurl+'department/';
  private getDepartmentURL = this.baseurl+'department/';
  private deleteDepartmentURL=this.baseurl+'department/';
  private getDepartmentByIdURL = this.baseurl+'department/';

  private getSalaryCodesURL= this.baseurl+'salary-code/'; 
  private postSalaryCodeURL= this.baseurl+'salary-code/'

  private postAllowancesURL= this.baseurl+'allowances'

  private postJobURL = this.baseurl+'job';
  private getJobURL = this.baseurl+'job';
  private deleteJobURL = this.baseurl+'job/';
  private getJobByIdURL = this.baseurl+'job/';
  private deleteSalaryCodeURL = this.baseurl+'salary-code/';
  private deleteAllowancesURL= this.baseurl+'allowances/';
  private getSalaryCodeByIdURL = this.baseurl+'salary-code/';


  public getLoginCriedential():Observable<any>{
    return this.http.get(this.getLoginCriedentialsURL);
  }
  public getEmpList():Observable<any>{
    return this.http.get(this.getEmpListsURL); 
  }
  public postEmployee(obj):Observable<any>{
    return this.http.post(this.postEmpURL,obj);
  }
  public deleteEmployee(id):Observable<any>{
    return this.http.delete(this.deleteEmpURL+id);
  }
  public updateEmployee(id,obj):Observable<any>{
    return this.http.put(this.deleteEmpURL+id,obj);
  }
  public getEmployeeByID(id):Observable<any>{
    return this.http.get(this.getEmpByIdURL+id);
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
  public postJob(obj):Observable<any>{
    return this.http.post(this.postJobURL,obj);
  }
  public getJob():Observable<any>{
    return this.http.get(this.getJobURL);
  }
  public deleteJob(id):Observable<any>{
    return this.http.delete(this.deleteJobURL+id);
  }
  public updateJob(id,obj):Observable<any>{
    return this.http.put(this.deleteJobURL+id,obj);
  }
  public getJobById(id):Observable<any>{
    return this.http.get(this.getJobByIdURL+id);
  }

  public getSalaryCodes():Observable<any>{
    return this.http.get(this.getSalaryCodesURL);
  }

  public postSalaryCode(obj):Observable<any>{
    return this.http.post(this.postSalaryCodeURL,obj);
  }

  public getSalaryCodeById(id):Observable<any>{
    return this.http.get(this.getSalaryCodeByIdURL+id);
  }
  public updateSalaryCode(id,obj):Observable<any>{
    return this.http.put(this.getSalaryCodesURL+id,obj);
  }

  public postAllowances(obj):Observable<any>{
    return this.http.post(this.postAllowancesURL,obj);
  }
  public deleteSalaryCode(id):Observable<any>{
    return this.http.delete(this.deleteSalaryCodeURL+id);
  }
  public deleteAllowances(id):Observable<any>{
    return this.http.delete(this.deleteEmpURL+id);
  }

  
  

}
