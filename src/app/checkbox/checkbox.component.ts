import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import 'rxjs/add/observable/of';
import { ReplaySubject } from 'rxjs/Rx';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  data;
  a;
  res;
  result;
  resarray: any = [];

 
 
  //private check: CheckService;
  selectedcheck: any = [];
  constructor( private check: CheckService) {
  
  }

checkbox() {
    this.check.getPosts().subscribe(data => {
      this.res = JSON.parse(JSON.stringify(data));
      this.a = data;
    });
  }


  clickCheck() {
    
    for (let i = 0; i < this.res.length; i++) {
      for (let j = 0; j < this.selectedcheck.length; j++) {
        if (this.res[i].name == this.selectedcheck[j]) {
          this.resarray.push(this.res[i]);
        }
      }
    }

    this.result = this.resarray;
    this.check.result(this.result);
    this.resarray = [];
    return this.result;
    
  }
  ngOnInit() {

  }

}
