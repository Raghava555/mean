import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginpageComponent implements OnInit {

  public loginForm;
  public alertMsg = "Enter Credential";
  
  public showSpinner = false;
  public username = "";
  public userPass = ""
  public errorMsgBoolean = false;
  public userErrorMsg = "";
  public userErrorMSgBoolean = false;
  public passErrorMSgBoolean = false;
  public passErrorMsg = "";

  constructor(private appService: AppService, 
    private router: Router) {
    this.loginForm = new FormGroup({
    })
  }

  ngOnInit(): void {
  }

  public onLoginButton() {
    this.userErrorMSgBoolean = false;
    this.errorMsgBoolean = false;
    this.passErrorMSgBoolean = false;

    if (this.username == "" && this.userPass == "") {
      this.errorMsgBoolean = true;
      this.alertMsg = "Please enter login credentials to continue"
    }
    else if (this.username.length < 8) {
      this.userErrorMsgData("Enter more than or equal to 8 characters")
    }
    else if (this.username.length > 20) {
      this.userErrorMsgData("Enter less than 20 characters")
    }
    else if (this.userPass.length < 8) {
      this.passErrorMsgData("Enter more than or equal to 8 characters")
    }
    else if (this.userPass.length > 20) {
      this.passErrorMsgData("Enter less than 20 characters")
    }
    else{
      this.showSpinner=true;
      this.appService.loginRequestData(this.username,this.userPass);
      this.appService.getSeverSubscriberListener().subscribe(obj=>{
        this.showSpinner=false;
        if(obj.success){
          if(obj.isUserAuthenticated){
            this.errorMsgBoolean = false;
            this.router.navigate(['dashboard']);
            this.appService.currentUserId= obj.customerid;
          }
          else{
            this.errorMsgBoolean = true;
            this.alertMsg = "Invalid User Credentials"
          }
        }
        else{
          this.errorMsgBoolean = true;
          this.alertMsg = "Sorry unable to connect to system"
        }
        
      });
      this.showSpinner=false;
      this.router.navigate(['dashboard']);
    }
    
  }

  public userErrorMsgData(msg) {
    this.userErrorMSgBoolean = true;
    this.userErrorMsg = msg;
  }
  public passErrorMsgData(msg) {
    this.passErrorMSgBoolean = true;
    this.passErrorMsg = msg;
  }
}


