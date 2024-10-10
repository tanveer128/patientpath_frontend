import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import { TestdetailsComponent } from './admin/testdetails/testdetails.component';
import { DoctorlistComponent } from './admin/doctorlist/doctorlist.component';
import { AppComponent } from './app.component';
import { AllorderComponent } from './admin/allorder/allorder.component';
import { AccountComponent } from './admin/account/account.component';

const routes: Routes = [
  { path: '', redirectTo: 'adminpage', pathMatch: 'full' },
  // {path:'',component:AppComponent},
  { path: 'adminpage', component: AdminpageComponent },
  {path:'testdetails',component:TestdetailsComponent},
  {path:'doctorlist',component:DoctorlistComponent},
  {path:'allorder',component:AllorderComponent},
  {path:'account',component:AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
