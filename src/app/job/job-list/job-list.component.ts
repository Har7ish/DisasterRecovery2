import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from 'src/app/services/project-service.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  public job:any=[];
  public j:any;
  public errorMsg:any;
  
  popoverTitle = 'You are about to wipe this poor field from existence';
  popoverMessage = 'Are you really going to do it?';
  confirmClicked = false;
  cancelClicked = false;
  constructor(private router:Router, private jService:ProjectServiceService) { }

  ngOnInit(): void {
    this.jService.getJob().subscribe(
      (data)=>{this.job=data; console.log(data)},
      (error)=>this.errorMsg=error,
      ()=> console.log("completed")
      );    
  }

  addJob(){
    this.router.navigate(['/addjob/']);
  }

  editJob(job:any){
    this.router.navigate(['/editjob/', job.code]);
  }

  deleteJob(job:any){
      this.jService.deleteJob(job.code).subscribe(() => {
        this.jService.getJob().subscribe(
          (data) => this.j = data,
          (error) => this.errorMsg = error
        )
      })
    }

}
