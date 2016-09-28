import {Crud} from './crud';
import {People} from './people';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFire} from 'angularfire2';

@Injectable()
export class Got implements Crud {
  constructor(private http: Http) {}


  /**
   * Get a personnage of GOT
   */
  get(id: number, nom?:string,prenom?:string):any {

  }


  /**
   * Add a personnage of GOT
   */
  add(object: People) {
  }

  /**
   * Remove a personnage of GOT
   */
  remove(id: number) {
  }


  /**
   * Set a personnage of GOT 
   */
  update(id:number, property: any) {
  }

  /**
   * Set a personnage of GOT 
   */
  set(object: People) {
  }

  /**
   * Query collection of personnage GOT 
   */
  query(limit: number, sort: string):any {
  }

  /**
   * 
   */
  private makeRequest(af: AngularFire) {
    
    return af.database.list('/');
  }

}
