import { Component, OnInit } from '@angular/core';
import {ProjectServiceService} from 'src/app/services/project-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-tc-review',
  templateUrl: './tc-review.component.html',
  styleUrls: ['./tc-review.component.css']
})
export class TcReviewComponent implements OnInit {

  public tcr:any;
  public errorMsg:any;

  constructor(private tcService:ProjectServiceService, private router:Router) { }

  ngOnInit(): void {
    this.tcService.getTC().subscribe(
      (data)=>{this.tcr=data; console.log(data)},
      (error)=>this.errorMsg=error,
      ()=> console.log("completed")
      );
  }

  approve(i:any,tcr:any):any{

    tcr.status=true;
    this.tcService.updateTC(i,tcr).subscribe(
      (data)=>{this.tcr.status=data;console.log(data)},
      (error)=>this.errorMsg=error,
      ()=>console.log("updated status")
    );
   

  }


}
