import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompressorComponent } from './components/add-compressor/add-compressor.component';
import { CompressorDetailsComponent } from './components/compressor-details/compressor-details.component';
import { CompressorsListComponent } from './components/compressors-list/compressors-list.component';

const routes: Routes = [
  { path: '', component: CompressorsListComponent },
  { path: 'addcompressor', component: AddCompressorComponent },
  { path: 'compressordetails', component: CompressorDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
