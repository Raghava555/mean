import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  public title="Meet the team";
  public teamList=[{name:"Raghav",url:'../assets/images/person.png'},
  {name:"Muni",url:'../assets/images/person.png'},
  {name:"Sekhar",url:'../assets/images/person.png'},
  {name:"Sudheer",url:'../assets/images/person.png'},
  ]

  ngOnInit(): void {
  }

}
