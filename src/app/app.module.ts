import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './main-form/main-form.component';
import { FormCommonComponent } from './form-common/form-common.component';
import { FormVoeComponent } from './form-voe/form-voe.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    FormCommonComponent,
    FormVoeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
