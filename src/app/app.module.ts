import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { EditMachineComponent } from './machine/edit-machine/edit-machine.component';
import { MachineDetailsComponent } from './machine/machine-details/machine-details.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { JobListComponent } from './job/job-list/job-list.component';
import { AddJobComponent } from './job/add-job/add-job.component';
import { EditJobComponent } from './job/edit-job/edit-job.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { TcListComponent } from './tc/tc-list/tc-list.component';
import { AddTcComponent } from './tc/add-tc/add-tc.component';
import { TotalAmountPipe } from './pipes/total-amount.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { TotalTimePipe } from './pipes/total-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    EditMachineComponent,
    MachineDetailsComponent,
    MachineListComponent,
    JobListComponent,
    AddJobComponent,
    EditJobComponent,
    JobDetailsComponent,
    TcListComponent,
    AddTcComponent,
    TotalAmountPipe,
    StatusPipe,
    TotalTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
    confirmButtonType: 'danger',
    cancelButtonType: 'primary',
    
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
