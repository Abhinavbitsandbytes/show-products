import { Component, OnInit } from '@angular/core';
import { GetData  } from './service/get-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public getDataService: GetData) {
  }
  allData="";

  ngOnInit() {
    
      this.getDataService.getData().subscribe(data => {
     console.log(data)
     this.allData = data;
    })
  }

  

}
