import {Component, OnInit} from '@angular/core';

interface Page {
  name: string,
  path: string
  //todo path jako enum
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  pages: Page[] = [
    {
      name: "startowa",
      path: ""
    },
    {
      name: "biuro",
      path: "office"
    },
    {
      name: "samochód",
      path: "car"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
