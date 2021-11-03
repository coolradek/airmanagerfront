import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Compressor } from 'src/app/models/compressor';
import { AddCompressorComponent } from '../add-compressor/add-compressor.component';


@Component({
  selector: 'app-compressor-navbar',
  templateUrl: './compressor-navbar.component.html',
  styleUrls: ['./compressor-navbar.component.scss']
})
export class CompressorNavbarComponent {

  newcompressor: Compressor;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(AddCompressorComponent, {
      width: '250px'
    });
  }


}
