import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component ({
    selector:'my-dashboard',
    templateUrl:'./dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{
    heroes:Hero[]=[];

    constructor(private heroService:HeroService){//构造函数的参数赋值给属性。

    }

    //创建组件后立即调用
    ngOnInit():void{
        this.heroService.getHeroes()
            .then(heroes=>this.heroes=heroes.slice(1,5));
    }
}