import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';//组件，父子传值，初始化
import { ActivatedRoute, ParamMap } from '@angular/router';//路由
import { Location } from '@angular/common';

import { HeroService } from './hero.service';

import { Hero } from './hero';	//英雄格式验证的类

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	constructor(
		private heroServices: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.heroServices.getHero(+params.get('id')))
			.subscribe(hero => this.hero = hero);
	}

	goBack(): void {
		this.location.back();
	  }
}