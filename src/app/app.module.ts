import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './shared/shared.module';
import { CompressorsListComponent } from './components/compressors-list/compressors-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AddCompressorComponent } from './components/add-compressor/add-compressor.component';
import { CompressorDetailsComponent } from './components/compressor-details/compressor-details.component';

import { MatDialogModule } from '@angular/material/dialog';
import { CompressorNavbarComponent } from './components/compressor-navbar/compressor-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CompressorsListComponent,
    AddCompressorComponent,
    CompressorDetailsComponent,
    CompressorNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
