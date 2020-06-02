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
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzCardModule } from 'ng-zorro-antd/card';
import { ListDepartmentComponent } from './components/list-department/list-department.component';
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
    ListDepartmentComponent
  ],
  imports: [
    BrowserModule,
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
    NzInputModule,NzTableModule,NzCardModule,NzMessageModule
    
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
