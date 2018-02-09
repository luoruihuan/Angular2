import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';//导入 Angular 模块：
import { FormsModule } from '@angular/forms'; //表单模块
import { HttpModule } from '@angular/http';//http服务

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heros.component';
import { HeroService } from './hero.service';

import { AppRoutingModule } from './app-routing.module';



@NgModule({
	//导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
	//比如导入CommonModule后就可以使用NgIf、NgFor等指令
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
	],
	//模块内部Components(组件)/Directives(指令)/Pipes(管道)的列表，声明一下这个模块内部成员
	declarations: [
		AppComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroesComponent
	],
	//指定应用程序的根级别需要使用的service
	providers: [
		HeroService
	],
	//通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中
	bootstrap: [AppComponent]
})

export class AppModule { }

