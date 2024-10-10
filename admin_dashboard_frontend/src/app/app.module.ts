import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminpageComponent } from './admin/adminpage/adminpage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestdetailsComponent } from './admin/testdetails/testdetails.component';
import { MatMenuModule } from '@angular/material/menu';
import { DoctorlistComponent } from './admin/doctorlist/doctorlist.component'; 
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { AdddoctorComponent } from './admin/adddoctor/adddoctor.component';
import { AddtestComponent } from './admin/addtest/addtest.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AllorderComponent } from './admin/allorder/allorder.component';
import { AccountComponent } from './admin/account/account.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AdminpageComponent,
    TestdetailsComponent,
    DoctorlistComponent,
    AdddoctorComponent,
    AddtestComponent,
    AllorderComponent,
    AccountComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
