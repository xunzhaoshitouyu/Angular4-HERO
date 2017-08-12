import { NgModule} from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDashComponent } from './components/hero-dash/hero-dash.component';

const routes:Routes = [
    {path:'detail/:id',component:HeroDetailComponent},
    {path:'heroes',component:HeroListComponent},
    {path:'dash',component:HeroDashComponent},
    {path:"", redirectTo:'/dash',pathMatch:'full'}//重定向
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}