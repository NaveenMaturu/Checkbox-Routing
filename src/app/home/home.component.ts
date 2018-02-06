import { Component,Input, OnInit } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CheckService } from '../check.service';
import { Subscription }   from 'rxjs/Subscription';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
 
subscription:  Subscription;
count:number  = 0;
count1;
second;
a;
 
totalButtons=['button1','button2','button3'];
clickEvent($event){
  this.count1 = this.count + 1;
    alert(event.target +' is triggered');
}

 constructor( private check: CheckService) {
   this.subscription = check.missionAnnounced$.subscribe(
      mission => {
          this.second = mission;
      this.a = mission;
        
        
       
    });
  
 }
 


  ngOnInit() {  
  }
  

}

