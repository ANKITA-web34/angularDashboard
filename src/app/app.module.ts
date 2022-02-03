import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { DefaultModule } from './layout/default/default.module';


@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSliderModule, MatButtonModule, DefaultModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
