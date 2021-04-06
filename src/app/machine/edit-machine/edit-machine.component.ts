import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';


@Component({
  selector: 'app-edit-machine',
  templateUrl: './edit-machine.component.html',
  styleUrls: ['./edit-machine.component.css']
})
export class EditMachineComponent implements OnInit {

  public m_code:any;
  public machine:any;
  public errorMsg:any;

  constructor(private mService:ProjectServiceService, private router:Router, private actRoute:ActivatedRoute, private fb:FormBuilder) { }

  public editmachineForm = this.fb.group({
    machine_code: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    hourly_rent: [0, [Validators.required, Validators.max(1000000)]],
    maxhoursperday: ['', [Validators.required, Validators.max(24)]]
  });

  ngOnInit(): void {

    this.actRoute.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      console.log(id);
      this.m_code=id;
      console.log(this.m_code);
      this.machine = this.mService.getMbyCode(this.m_code).subscribe(
        (data) => {this.machine = data; console.log(data);
          this.editmachineForm = this.fb.group({
            machine_code: [this.machine.machine_code, [Validators.required, Validators.minLength(3)]],
            description: [this.machine.description, [Validators.required, Validators.minLength(3)]],
            hourly_rent: [this.machine.hourly_rent, [Validators.required, Validators.max(1000000)]],
            maxhoursperday: [this.machine.maxhoursperday, [Validators.required, Validators.max(24)]]
          });
        },
        (error) => {this.errorMsg = error; console.log(error); }
      );
    });
    
  }

  get machine_code(){
    return this.editmachineForm.get('machine_code');
  }

  get description(){
    return this.editmachineForm.get('description');
  }

  get hourly_rent(){
    return this.editmachineForm.get('hourly_rent');
  }

  get maxhoursperday(){
    return this.editmachineForm.get('maxhoursperday');
  }

  update(m_code:any, editmachineForm:any){
    console.log(this.m_code);
    console.log(this.editmachineForm);
    this.mService.updateMachine(this.m_code, this.editmachineForm.value).subscribe(
      (data) => {this.machine = data; console.log(data);},
      (error) => {this.errorMsg = error; console.log(error); }
    );
    this.router.navigate(['/machines']);
  }


}
