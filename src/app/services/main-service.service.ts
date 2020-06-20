import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private http:HttpClient) { }


  private baseurl:String="http://localhost:8080/api/";

  private getLoginCriedentialsURL =this.baseurl+"login";
  private getEmpListsURL= this.baseurl+'employee/'
  private postEmpURL= this.baseurl+'employee/post'
  private deleteEmpURL = this.baseurl+'employee/'
  private getEmpByIdURL = this.baseurl+'employee/'
  private postDepartmentURL= this.baseurl+'department/post';
  private getDepartmentURL = this.baseurl+'department/';
  private deleteDepartmentURL=this.baseurl+'department/';
  private getDepartmentByIdURL = this.baseurl+'department/';

  private getSalaryCodesURL= this.baseurl+'salary-code/'; 
  private postSalaryCodeURL= this.baseurl+'salary-code/post'

  private postAllowancesURL= this.baseurl+'allowances'

  private postJobURL = this.baseurl+'job/post';
  private getJobURL = this.baseurl+'job/';
  private deleteJobURL = this.baseurl+'job/';
  private getJobByIdURL = this.baseurl+'job/';
  private deleteSalaryCodeURL = this.baseurl+'salary-code/';
  private deleteAllowancesURL= this.baseurl+'allowances/';
  private getSalaryCodeByIdURL = this.baseurl+'salary-code/';


  // private getLoginCriedentialsURL = environment.baseUrl+"login";
  // private getEmpListsURL= environment.baseUrl+'employees/'
  // private postEmpURL= environment.baseUrl+'employees/post'
  // private deleteEmpURL = environment.baseUrl+'employees/'
  // private getEmpByIdURL = environment.baseUrl+'employees/'
  // private postDepartmentURL= environment.baseUrl+'department/post';
  // private getDepartmentURL = environment.baseUrl+'department/';
  // private deleteDepartmentURL = environment.baseUrl+'department/';
  // private getDepartmentByIdURL = environment.baseUrl+'department/';
  // private getSalaryCodesURL = environment.baseUrl+'salarycode/'; 
  // private postSalaryCodeURL = environment.baseUrl+'salarycode/post'
  // private postAllowancesURL = environment.baseUrl+'allowances'
  // private postJobURL = environment.baseUrl+'job/post';
  // private getJobURL = environment.baseUrl+'job/';
  // private deleteJobURL = environment.baseUrl+'job/';
  // private getJobByIdURL = environment.baseUrl+'job/';
  private postLeaveCodeURL = environment.baseUrl+'leavecode/post';
  private getLeaveCodeURL = environment.baseUrl+'leavecode/';
  private deleteLeaveCodeURL = environment.baseUrl+'leavecode/';
  private getLeaveCodeByIdURL = environment.baseUrl+'leavecode/';

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

  // public postAllowances(obj):Observable<any>{
  //   return this.http.post(this.postAllowancesURL,obj);
  // }
  public deleteSalaryCode(id):Observable<any>{
    return this.http.delete(this.deleteSalaryCodeURL+id);
  }
  public deleteAllowances(id):Observable<any>{
    return this.http.delete(this.deleteEmpURL+id);
  }

  
  


  public postAllowances(obj):Observable<any>{
    return this.http.post(this.postAllowancesURL,obj);
  }
  public postLeaveCode(obj):Observable<any>{
    return this.http.post(this.postLeaveCodeURL,obj);
  }
  public getLeaveCode():Observable<any>{
    return this.http.get(this.getLeaveCodeURL);
  }
  public deleteLeaveCode(id):Observable<any>{
    return this.http.delete(this.deleteLeaveCodeURL+id);
  }
  public updateLeaveCode(id,obj):Observable<any>{
    return this.http.put(this.deleteLeaveCodeURL+id,obj);
  }
  public getLeaveCodeById(id):Observable<any>{
    return this.http.get(this.getLeaveCodeByIdURL+id);
  }

}
