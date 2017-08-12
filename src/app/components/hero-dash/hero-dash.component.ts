import { Component, OnInit } from '@angular/core';
import { HeroService1 } from '../hero.service1';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-dash',
  templateUrl: './hero-dash.component.html',
  styleUrls: ['./hero-dash.component.css']
})
export class HeroDashComponent implements OnInit {
  title = "Top Heroes";
  constructor(private heroService:HeroService1) { }
  heroes:Hero[];//所有的英雄数据
  selectedHero:Hero;//选中的英雄数据
  //获取英雄数据
  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(1,5));
  }
  ngOnInit() {
    this.getHeroes();
  }
}
