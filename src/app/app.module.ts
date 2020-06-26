import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClientJsonpModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MainScreenEmpComponent } from './components/main-screen-emp/main-screen-emp.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
import { SalaryCodeAddComponent } from './components/salary-code-add/salary-code-add.component';
import { SalaryCodeListComponent } from './components/salary-code-list/salary-code-list.component';
import { NzDropDownModule  } from 'ng-zorro-antd';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { AddJobComponent } from './components/add-job/add-job.component';
import { ListJobComponent } from './components/list-job/list-job.component';
import { AddLeaveCodeComponent } from './components/add-leave-code/add-leave-code.component';
import { ListLeaveCodeComponent } from './components/list-leave-code/list-leave-code.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ResumeViewComponent } from './components/resume-view/resume-view.component';
import { PersonalDashboardComponent } from './personal-dashboard/personal-dashboard.component';
import { NzRadioModule } from 'ng-zorro-antd/radio';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainScreenComponent,
    MainDashboardComponent,
    AddEmployeeComponent,
    MainScreenEmpComponent,
    ListEmployeeComponent,
    AddDepartmentComponent,
    ListDepartmentComponent,
    SalaryCodeAddComponent,
    SalaryCodeListComponent,
    AddJobComponent,
    ListJobComponent,
    AddLeaveCodeComponent,
    ListLeaveCodeComponent,
    ResumeViewComponent,
    PersonalDashboardComponent

  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzFormModule,
    NzMenuModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    ScrollingModule,
    HttpClientJsonpModule,
    NzButtonModule,
    NzIconModule,
    NzLayoutModule,
    NzInputModule,
    NzTableModule,
    NzCardModule,
    NzMessageModule,
    NzDropDownModule,
    NzSelectModule,
    NzModalModule,
    NzAvatarModule,
    NzRadioModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
