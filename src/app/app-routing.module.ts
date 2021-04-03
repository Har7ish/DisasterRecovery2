import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { EditMachineComponent } from './machine/edit-machine/edit-machine.component';
import { MachineDetailsComponent } from './machine/machine-details/machine-details.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';


const routes: Routes = [
  {path:'machines', component: MachineListComponent},
  {path:'machines/:id', component: MachineDetailsComponent},
  {path:'addmachine',component: AddMachineComponent},
  {path:'editmachine/:id',component:EditMachineComponent},
  // {path:'**', component:PageNotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
