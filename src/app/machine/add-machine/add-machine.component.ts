import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-add-machine',
  templateUrl: './add-machine.component.html',
  styleUrls: ['./add-machine.component.css']
})
export class AddMachineComponent implements OnInit {

  public machineForm:any;
  public errorMsg:any;
  public machine:any;

  constructor(private mService:ProjectServiceService, private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.machineForm = this.fb.group({
      machine_code: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      hourly_rent: ['', [Validators.required, Validators.max(10000)]],
      maxhoursperday: ['', [Validators.required, Validators.max(24)]]
    });
  }

  onSubmit(machineForm:any){
    console.log(this.machineForm.value);
    this.mService.postMachine(this.machineForm.value).subscribe(
      (data) => {
        this.machine = data; 
        console.log(this.machine);
        this.mService.getMachine().subscribe(
          (data) => this.machine = data,
          (error) => this.errorMsg = error
        )
      },
      (error) => this.errorMsg = error
    )
    this.router.navigate(['/machines']);    //
    this.machineForm.reset();
  }

  get machine_code(){
    return this.machineForm.get('machine_code');
  }

  get description() {
    return this.machineForm.get('description');
  }

  get hourly_rent() {
    return this.machineForm.get('hourly_rent');
  }

  get maxhoursperday() {
    return this.machineForm.get('maxhoursperday');
  }

}
