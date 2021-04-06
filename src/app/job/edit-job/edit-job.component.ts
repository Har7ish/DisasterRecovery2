import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Validators, FormBuilder, FormGroup,NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {

 

  public j_code:any;
  public job:any;
  public errorMsg:any;

  constructor(private jService:ProjectServiceService, private router:Router, private actRoute:ActivatedRoute, private fb:FormBuilder) { }

  public editjobForm = this.fb.group({
    code: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    hourly_rate: [0, [Validators.required, Validators.max(1000000)]],
    maxhoursperday: [0, [Validators.required, Validators.max(24)]]
  });

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      console.log(id);
      this.j_code=id;
      console.log(this.j_code);
      this.job = this.jService.getJbyCode(this.j_code).subscribe(
        (data) => {this.job = data; console.log(data);
          this.editjobForm = this.fb.group({
            code: [this.job.code, [Validators.required, Validators.minLength(3)]],
            description: [this.job.description, [Validators.required, Validators.minLength(3)]],
            hourly_rate: [this.job.hourly_rate, [Validators.required, Validators.max(1000000)]],
            maxhoursperday: [this.job.maxhoursperday, [Validators.required, Validators.max(24)]]
          });
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
    });
    
  }

  get code(){
    return this.editjobForm.get('code');
  }

  get description(){
    return this.editjobForm.get('description');
  }

  get hourly_rate(){
    return this.editjobForm.get('hourly_rate');
  }

  get maxhoursperday(){
    return this.editjobForm.get('maxhoursperday');
  }

  update(j_code:any, editjobForm:any){
    console.log(this.j_code);
    console.log(this.editjobForm);
    this.jService.updateJob(this.j_code, this.editjobForm.value).subscribe(
      (data) => {this.job = data; console.log(data);},
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/jobs']);
  }


    
}
