import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {ProjectServiceService} from 'src/app/services/project-service.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  public jobForm:any;
  public job:any;
  public errorMsg:any;

  constructor(private router:Router, private jService:ProjectServiceService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.jobForm=this.fb.group({
      code:['',[Validators.required, Validators.minLength(3)]],
      description:['',[Validators.required,Validators.minLength(3)]],
      hourly_rate:[0,[Validators.required, Validators.max(10000)]],
      maxhoursperday:[0,[Validators.required, Validators.max(24)]],
    });    
  }

  onSubmit(jobForm:any){
    console.log(this.jobForm.value);
    this.jService.postJob(this.jobForm.value).subscribe(
      (data) => {
        this.job = data; 
        console.log(this.job);
        this.jService.getJob().subscribe(
          (data) => this.job = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/jobs']);    //
    this.jobForm.reset();
  }

  get code(){
    return this.jobForm.get('code');
  }

  get description() {
    return this.jobForm.get('description');
  }

  get hourly_rate() {
    return this.jobForm.get('hourly_rate');
  }

  get maxhoursperday() {
    return this.jobForm.get('maxhoursperday');
  }

  

}
