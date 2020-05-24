import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfilesService } from './services/profiles.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule( {
  declarations: [
    AppComponent, ProfilesComponent
  ],
  imports: [
    BrowserModule, HttpModule, NgbModule.forRoot(), HttpClientModule, FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ProfilesService ],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
