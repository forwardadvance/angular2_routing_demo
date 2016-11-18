import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CatPageComponent } from './cat.page.component';
import { HomePageComponent } from './home.page.component';

const appRoutes: Routes = [
  {path: '', component:  HomePageComponent },
  {path: 'cat', component: CatPageComponent, }
]

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, CatPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
