import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModuleRouting } from './app.routing.module';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';

import { DailyLifeComponent } from './components/category/daily-life/daily-life.component';
import { WorkComponent } from './components/category/work/work.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        DailyLifeComponent,
        WorkComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppModuleRouting
    ]
})
export class AppModuleShared {
}
