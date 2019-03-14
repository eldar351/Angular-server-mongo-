import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { RouterModule } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './comps/main/main.component';
import { AlltabletsComponent } from './comps/alltablets/alltablets.component';
import { AddtabletComponent } from './comps/addtablet/addtablet.component';
import { Err404Component } from './comps/err404/err404.component';

  
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AlltabletsComponent,
    AddtabletComponent,
    Err404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
        {path:"" , pathMatch:'full', component:MainComponent}, 
        {path:"add" , component:AddtabletComponent},
        {path:"all" , component:AlltabletsComponent},
        {path:"**" , component:Err404Component}
    ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
