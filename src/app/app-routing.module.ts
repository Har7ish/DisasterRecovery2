import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './job/add-job/add-job.component';
import { EditJobComponent } from './job/edit-job/edit-job.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { EditMachineComponent } from './machine/edit-machine/edit-machine.component';
import { MachineDetailsComponent } from './machine/machine-details/machine-details.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';
import { AddTcComponent } from './tc/add-tc/add-tc.component';
import { TcListComponent } from './tc/tc-list/tc-list.component';


const routes: Routes = [
  {path:'machines', component: MachineListComponent},
  {path:'machines/:id', component: MachineDetailsComponent},
  {path:'addmachine',component: AddMachineComponent},
  {path:'editmachine/:id',component:EditMachineComponent},
  {path:'jobs', component: JobListComponent},
  {path:'jobs/:id',component:JobDetailsComponent},
  {path:'addjob',component:AddJobComponent},
  {path:'editjob/:id',component:EditJobComponent},
  {path:'timecards',component:TcListComponent},
  {path:'addtimecard',component:AddTcComponent}
  // {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
