import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['date', 'description', 'amount'];
  public userData:any ={
      id:'555',
      name:'Raghava',
      last_login: '10 Mar 2021',
      balance:'30000',
      transaction:[{
        date:"10 Mar 2021",
        description:'Bike EMI',
        amount:'7000'
      },
      {
        date:"10 Mar 2020",
        description:'Home Loan',
        amount:'9000'
      },
      {
        date:"10 Mar 2020",
        description:'Personal Loan Emi',
        amount:'8000'
      }
    ]
  }

  public displayedCol: string[]=['date','description','amount']
  public tableHeader=['Date','Description','Amount']
  public arr=['SMS Alert','Marketing Newsletter','Flyers']
  public twoWayData:string;
  public checekedElemnt;
  public tableData;
  constructor(public appService:AppService) { 
    this.tableData = this.userData.transaction;
  
    this.appService.getUserInformation().subscribe(obj=>{
      if(obj.success){
      this.userData = obj.customer;     
      }
      else{

      }
    })
    console.log("user data...",this.userData.id);
    
  }

  ngOnInit(): void {
  }

  onSubmitButton(){
    if(this.twoWayData){
      let val = this.checekedElemnt ? this.arr[this.checekedElemnt]:""
      alert(val+"  :"+this.twoWayData)
    }
    else{
      alert("please enter value")
    }
    
    
  }
  onCheckBox(e){
    this.checekedElemnt = Number(e)-1;
    console.log(e,this.checekedElemnt);
    
  }
  
}