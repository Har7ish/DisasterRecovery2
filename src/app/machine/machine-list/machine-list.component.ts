import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from 'src/app/services/project-service.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.css']
})
export class MachineListComponent implements OnInit {

  public machine:any=[];
  public m:any;
  public errorMsg:any;
  public m_name:any;

  popoverTitle = 'You are about to wipe this poor field from existence';
  popoverMessage = 'Are you really going to do it?';
  confirmClicked = false;
  cancelClicked = false;

  constructor(private mService:ProjectServiceService, private router:Router) { }

  ngOnInit(): void {
    this.mService.getMachine().subscribe(
      (data)=>{this.machine=data; console.log(data)},
      (error)=>this.errorMsg=error,
      ()=> console.log("completed")
      );    
  }
  
  detselect(machine:any){
    this.router.navigate(['/machines/',machine.machine_code]);
  }

  addMachine(){
    this.router.navigate(['/addmachine/']);
  }

  editMachine(machine:any){
    this.router.navigate(['/editmachine/', machine.machine_code]);
  }

  deleteMachine(machine:any){
      this.mService.deleteMachine(machine.machine_code).subscribe(() => {
        this.mService.getMachine().subscribe(
          (data) => this.m = data,
          (error) => this.errorMsg = error
        )
      })
    }

  

  


}
