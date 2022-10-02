import { Component, OnInit } from '@angular/core';

interface Page{name:string, path:string}
//path jako enum
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
pages:Page[] = [
  {
    name:"startowa",
    path:""
  },
  {
    name:"biuro",
    path:"office"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}