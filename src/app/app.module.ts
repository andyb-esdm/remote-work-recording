import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Alert } from 'selenium-webdriver';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthenticationService } from './authentication.service';
import { AuthenticationGuardService } from './authentication-guard.service';
import { WorkRecordFormComponent } from './work-record-form/work-record-form.component';
import { WorkRecordListComponent } from './work-record-list/work-record-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkRecordService } from './work-record.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent,
    WorkRecordFormComponent,
    WorkRecordListComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot()
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    WorkRecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
