import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  public selectedMenu="dashboard";
  constructor(private router:Router) { }
  

  ngOnInit(): void {
    this.selectedMenu = (this.router.url).split("/")[1];
  }

  public onTabChanged(e){      
      this.router.navigate([e]);
  }

}
