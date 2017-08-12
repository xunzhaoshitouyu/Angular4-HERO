import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//导入路由依赖包
import { RouterModule } from '@angular/router';

import { HttpModule } from '@angular/http';//导入http服务依赖包

//imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { AppComponent } from './app.component';
import { HeroService1 } from './components/hero.service1';
import { HeroDashComponent } from './components/hero-dash/hero-dash.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchService } from './components/hero-search.service';//搜索服务
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { FormtestComponent } from './components/formtest/formtest.component';


@NgModule({
  declarations: [
    HeroDetailComponent,
    HeroListComponent,
    AppComponent,
    HeroDashComponent,
    HeroSearchComponent,
    FormtestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [HeroService1,HeroSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
