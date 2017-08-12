import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
@Injectable()

export class HeroService1{
    constructor( private http:Http){};
    private heroUrl = 'api/heroes';
    private header = new Headers({'Content-Type':'application/json'});
    getHeroes():Promise<Hero[]>{
        return this.http.get(this.heroUrl)
                        .toPromise()
                        .then(response => response.json().data as Hero[])
                        .catch(this.handleEroor)
    }

    handleEroor(error:any):Promise<any>{
        console.error('An error occurred',error);
        return Promise.reject(error.message || error);
    }3

    getHero(id:number):Promise<Hero>{
        const url = `${this.heroUrl}/${id}`;
        return this.http.get(url)
                        .toPromise()
                        .then(response => response.json().data as Hero)
                        .catch(this.handleEroor)
    }

    update(hero:Hero):Promise<Hero>{
        const url = `${this.heroUrl}/${hero.id}`;
        return this.http.put(url,JSON.stringify(hero),{headers:this.header})
                        .toPromise()
                        .then(()=>hero)
                        .catch(this.handleEroor)
    }

    create(name:string):Promise<Hero>{
        return this.http.post(this.heroUrl,JSON.stringify({name:name}),{headers:this.header})
                   .toPromise()
                   .then(res=>res.json().data as Hero)
                   .catch(this.handleEroor)
    }

    delete(id:number):Promise<void>{
        const url = `${this.heroUrl}/${id}`;
        return this.http.delete(url,{headers:this.header})
                   .toPromise()
                   .then(()=>null)
                   .catch(this.handleEroor)
    }
}