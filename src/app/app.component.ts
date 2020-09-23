import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { callAPI } from './api/apiFile'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataresult: any;
  constructor(private callAPI:callAPI){}
  title = 'angulartest';

  callApi(){
    this.callAPI.calljson().subscribe(data=>{
        console.log("data",data);
        this.dataresult = data;
      }
    )
  }
}
