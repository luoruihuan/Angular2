import {Component,Input} from '@angular/core';
import { Hero } from './hero';	//英雄格式验证的类

@Component ({
	selector:'hero-detail',
	templateUrl:'./hero-detail.html'
})

export class HeroDetailComponent{
	@Input()hero:Hero;
}