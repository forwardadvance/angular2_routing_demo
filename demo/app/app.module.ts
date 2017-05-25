import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatPageComponent } from './cat.page.component';
import { HomePageComponent } from './home.page.component';

const appRoutes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'cat/:id', component: CatPageComponent }
]

var routerModule = RouterModule.forRoot(appRoutes)

@NgModule({
  imports: [
    BrowserModule,
    routerModule
  ],
  declarations: [ AppComponent, CatPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
