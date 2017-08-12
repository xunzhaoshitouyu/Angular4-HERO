import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Http,Headers} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroSearchService {
  constructor(private http:Http) { }
  query(term:string):Observable<Hero[]>{
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map(response=>response.json().data as Hero[])
  }

}
