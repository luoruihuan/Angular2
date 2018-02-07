import { BrowserModule } from '@angular/platform-browser';//导入 Angular 模块：
import { NgModule } from '@angular/core'; //导入Component装饰器：
import { FormsModule }   from '@angular/forms'; //表单模块

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  //模块内部Components(组件)/Directives(指令)/Pipes(管道)的列表，声明一下这个模块内部成员
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  //导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
  //比如导入CommonModule后就可以使用NgIf、NgFor等指令
  imports: [
    BrowserModule,
    FormsModule
  ],
  //指定应用程序的根级别需要使用的service
  providers: [
      
  ],
  //通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中
  bootstrap: [AppComponent]
})
export class AppModule { }
