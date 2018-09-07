import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./components/home/home.component";
import { DailyLifeComponent } from "./components/category/daily-life/daily-life.component";
import { WorkComponent } from "./components/category/work/work.component";

const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home", component: HomeComponent,
        children: [
            { path: "daily-life/:name", component: DailyLifeComponent },
            { path: "work/:name", component: WorkComponent }
        ]
    },
    { path: "**", redirectTo: "home" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppModuleRouting { }