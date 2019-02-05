import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from '@angular/common';
import { SafePipe } from 'src/services/safe.pipe';

@NgModule({
  declarations: [AppComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
