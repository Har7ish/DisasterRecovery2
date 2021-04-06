import { Component, OnInit } from '@angular/core';
import{ProjectServiceService} from 'src/app/services/project-service.service';
import{Router} from '@angular/router';

@Component({
  selector: 'app-tc-list',
  templateUrl: './tc-list.component.html',
  styleUrls: ['./tc-list.component.css']
})
export class TcListComponent implements OnInit {

  public tc:any=[];
  public errorMsg:any;
  public total_TC_amount:any;

  constructor(private tcService:ProjectServiceService, private router:Router) { }

  ngOnInit(): void {
    this.tcService.getTC().subscribe(
      (data)=>{this.tc=data; console.log(data)},
      (error)=>this.errorMsg=error,
      ()=> console.log("completed")
      );
        }  
    
  

  // getTotalAmount(i:any):any{
  //     // console.log(i);
  //     // console.log(this.tc[i].job[0]);
  //     this.total_TC_amount=0;
  //     for(let j of this.tc[i].job){
      
  //     this.total_TC_amount=this.total_TC_amount+(j.hourly_rate*this.tc[i].total_hours);
  //     // console.log(this.total_TC_amount);
  //     }
  //     // this.total_TC_amount=(this.tc[i].job[0].hourly_rate*this.tc[i].total_hours)+(this.tc[i].machine[0].hourly_rent*this.tc[i].total_hours);
  //     return this.total_TC_amount;
  //   }  
  

}
  
  
  
  

