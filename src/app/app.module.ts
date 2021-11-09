import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { CompressorsListComponent } from './components/compressors-list/compressors-list.component';

import { HttpClientModule } from '@angular/common/http';
import { AddCompressorComponent } from './components/add-compressor/add-compressor.component';
import { CompressorDetailsComponent } from './components/compressor-details/compressor-details.component';

import { CompressorNavbarComponent } from './components/compressor-navbar/compressor-navbar.component';
import { EditCompressorComponent } from './dialogs/edit-compressor/edit-compressor.component';
import { ConfirmationDialogComponent } from './dialogs/confirmation-dialog/confirmation-dialog.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CompressorsListComponent,
    AddCompressorComponent,
    CompressorDetailsComponent,
    CompressorNavbarComponent,
    EditCompressorComponent,
    ConfirmationDialogComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
