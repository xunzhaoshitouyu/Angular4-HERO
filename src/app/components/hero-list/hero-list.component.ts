import { Component,OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService1 } from '../hero.service1';
import { Router } from '@angular/router'



@Component({
  selector: 'my-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes:Hero[];
  
  selectedHero:Hero;

    //注入HeroService
  constructor(private heroService:HeroService1,private router:Router){}

  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
  }

  //单击单个英雄
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  };

  // 跳转到详情页
  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  // 添加新英雄
  add(name:string):void{
    name = name.trim();
    if(!name){return;}
    this.heroService.create(name).then(hero=>{this.heroes.push(hero);this.selectedHero=null;})
  }

  //删除英雄
  delete(hero:Hero):void{
    this.heroService.delete(hero.id).then(()=>{
      this.heroes = this.heroes.filter(h=>h!==hero);
      if(this.selectedHero == hero){this.selectedHero = null};
    })
  }

  ngOnInit():void{
    this.getHeroes();
  }
  
}



