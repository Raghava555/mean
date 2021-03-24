import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reuse-comp',
  templateUrl: './reuse-comp.component.html',
  styleUrls: ['./reuse-comp.component.css']
})
export class ReuseCompComponent implements OnInit {

  @Input() public name;
  
  imgeurl
  constructor() { }

  ngOnInit(): void {
  }
}
