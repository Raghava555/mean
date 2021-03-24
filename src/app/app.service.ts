import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }//

  public loginUpdateEmiter=new Subject<any>();
  public userInformation= new Subject<any>();
  public currentUserId="123";
  public returnData= {
    success:true,
    customer:{
       id:'123',
       name:'Kalai',
       last_login: '04 Feb 2018',
       balance:'3000',
       transaction:[{
         date:"03 Feb 2018",
         desc:'Room rent',
         amount:'700'
       },
       {
         date:"02 Feb 2018",
         desc:'Electricity Bill',
         amount:'900'
       },
       {
         date:"01 Feb 2018",
         desc:'WIFI Bill',
         amount:'800'
       }
     ]
    } 
   }

  public loginRequestData(userid,pass){
    let requestData={
      "client_id":"iJavaScript",
      "user":{
        "id":userid,
        "password":pass
      }
    }
    this.http.post('http://localhost:8000/api/login',requestData).subscribe(obj=>{
      this.loginUpdateEmiter.next(obj);  
    })
  }
  
  getSeverSubscriberListener(){
    return this.loginUpdateEmiter.asObservable();
  }

  public userGetData(){
    let req={"customerid":this.currentUserId}
    this.http.post('http://localhost:8080/api/userData',req)
      .subscribe((obj)=>{
          console.log(":data recieved");
          this.userInformation.next(obj);  
      })
  }

  getUserInformation(){
    return this.userInformation.asObservable();
  }
}
