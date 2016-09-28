import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire} from 'angularfire2';

@Injectable()
export class Got {
  constructor(private http: Http) {}


  /**
   * Get a personnage of GOT
   */
  get(id: number) {
  }


  /**
   * Add a personnage of GOT
   */
  add(object: any) {
  }

  /**
   * Remove a personnage of GOT
   */
  remove(object: any) {
  }

  /**
   * Set a personnage of GOT 
   */
  set(object: any) {
  }

  /**
   * Query collection of personnage GOT 
   */
  query(limit: number, sort: string) {
  }

  /**
   * 
   */
  private makeRequest(af: AngularFire) {
    
    return af.database.list('/');
  }

}
