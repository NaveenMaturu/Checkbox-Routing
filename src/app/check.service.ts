import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Subject }    from 'rxjs/Subject';

import 'rxjs/add/operator/map';

@Injectable()
export class CheckService {
  private apiURL = "assets/check.json"

   private missionAnnouncedSource = new Subject<string>();

   
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();

  constructor(private http: Http) { }

  getPosts() {
    return this.http.get(this.apiURL).map(res => res.json());
  }

  result(result: string){
   
 this.missionAnnouncedSource.next(result);
  }
   

}
