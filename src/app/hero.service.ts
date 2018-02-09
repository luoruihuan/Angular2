import {Injectable} from '@angular/core';   //注入

import { Hero } from './hero';              //数据形式类
import {HEROES} from  './mock-heroes';      //数据


@Injectable()

export class HeroService{
    getHeroes():Promise<Hero[]>{
        return  Promise.resolve(HEROES); 
    }
    getHero(id:number):Promise<Hero>{
        return this.getHeroes()
                .then(heroes=>heroes.find(hero=>hero.id==id))
    }
}