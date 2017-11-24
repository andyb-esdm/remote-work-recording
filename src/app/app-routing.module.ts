import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WorkRecordFormComponent } from './work-record-form/work-record-form.component';
import { WorkRecordListComponent } from './work-record-list/work-record-list.component';
import { AuthenticationGuardService } from './authentication-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'work-record-form', component: WorkRecordFormComponent, canActivate: [AuthenticationGuardService] },
  { path: 'work-record-form/:id', component: WorkRecordFormComponent, canActivate: [AuthenticationGuardService] },
  { path: 'work-record-list', component: WorkRecordListComponent, canActivate: [AuthenticationGuardService] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
