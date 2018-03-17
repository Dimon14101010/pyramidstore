import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})

export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('dashboard here');
  }
}
