import { Component } from '@angular/core';

import {Hero}	from './hero';	//英雄格式验证的类
import {HeroService} from './hero.service'; //英雄列表数据

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers:[HeroService]
})

export class AppComponent {
	title = '我的英雄们';
	selectedHero: Hero;
	heroes :Hero[];

	constructor(private heroService:HeroService){
	
	}

	getHeroes():void{
		this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}

	onSelect(hero: Hero):void {
		this.selectedHero = hero;
	}
}




