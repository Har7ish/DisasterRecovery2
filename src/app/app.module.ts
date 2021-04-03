import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMachineComponent } from './machine/add-machine/add-machine.component';
import { EditMachineComponent } from './machine/edit-machine/edit-machine.component';
import { MachineDetailsComponent } from './machine/machine-details/machine-details.component';
import { MachineListComponent } from './machine/machine-list/machine-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddMachineComponent,
    EditMachineComponent,
    MachineDetailsComponent,
    MachineListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
