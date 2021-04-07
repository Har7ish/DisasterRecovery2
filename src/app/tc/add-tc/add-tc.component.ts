import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectServiceService } from 'src/app/services/project-service.service';

// interface JobSelect{
//   code:string;
//   description:string;
//   hourly_rate:number;
//   maxhoursperday:number;
// }


@Component({
  selector: 'app-add-tc',
  templateUrl: './add-tc.component.html',
  styleUrls: ['./add-tc.component.css']
})
export class AddTcComponent implements OnInit {

  public tcForm:any;
  public errorMsg:any;
  public tc:any;
  public dropdownlist:any=[];
  public joblist:any=[];
  public machinelist:any=[];
  public mlist:any=[];
  
  // jobSelect$:Observable<JobSelect[]>;
  

  constructor(private tcService:ProjectServiceService, private fb:FormBuilder, private router:Router,private dlService:ProjectServiceService) { }

  ngOnInit(): void {

    this.tcService.getJob().subscribe(
      (data)=>{this.joblist=data; console.log(data)
        for (let i of this.joblist){
          this.dropdownlist.push(i["code"]);
        }
        
        console.log(this.joblist);
  
        console.log(this.dropdownlist);},
      (error)=>this.errorMsg=error,
      ()=> console.log("completed")
      );

      this.tcService.getMachine().subscribe(
        (data)=>{this.machinelist=data; console.log(data)
          for (let i of this.machinelist){
            this.mlist.push(i["machine_code"]);
          }
          
          console.log(this.machinelist);
    
          console.log(this.mlist);},
        (error)=>this.errorMsg=error,
        ()=> console.log("completed")
        );


      
      
      // for (let i of this.joblist){
      //   this.dropdownlist.push(i["code"]);
      // }
      
      // console.log(this.joblist);

      // console.log(this.dropdownlist);

    

    this.tcForm = this.fb.group({
      sitecode: ['', [Validators.required, Validators.minLength(3)]],
      contractor_name: ['', [Validators.required, Validators.minLength(3)]],
      // job: ['', [Validators.required, Validators.minLength(3)]],
      job:[''], //[Validators.required, Validators.minLength(3)]],
      machine:['', [Validators.required, Validators.minLength(3)]], 
      // ['', [Validators.required, Validators.minLength(3)]],
      total_job_hours:[0,[Validators.required, Validators.max(24)]],
      total_machine_hours:[0,[Validators.required, Validators.max(24)]]
    });

  }
  
  

  onSubmit(tcForm:any){
    console.log(this.tcForm.value);
    let item={
      "sitecode": this.tcForm.value.sitecode,
      "contractor_name": this.tcForm.value.contractor_name,
      "job": [
          {
            "code":this.tcForm.value.job
          },
          
          {
            "code":this.tcForm.value.job
          }
      ],
      "machine": [
          {
            "machine_code": this.tcForm.value.machine
          },

          {
            "machine_code":this.tcForm.value.machine
          }
  
      ],
      "total_job_hours": this.tcForm.value.total_job_hours,
      "total_machine_hours":this.tcForm.value.total_machine_hours
      
  }


    this.tcService.postTC(item).subscribe(
      (data) => {
        this.tc = data; 
        console.log(this.tc);
        this.tcService.getTC().subscribe(
          (data) => this.tc = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/timecards']);    //
    this.tcForm.reset();
  }

  get sitecode(){
    return this.tcForm.get('sitecode');
  }
 
  get contractor_name() {
    return this.tcForm.get('contractor_name');
  }

  get job(){
    return this.tcForm.get('job');
  }

  get machine(){
    return this.tcForm.get('machine');
  }

  get total_job_hours(){
    return this.tcForm.get('total_job_hours');
  }

  get total_machine_hours(){
    return this.tcForm.get('total_machine_hours');
  }
}



