import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCompressorComponent } from '../add-compressor/add-compressor.component';


@Component({
  selector: 'app-compressor-navbar',
  templateUrl: './compressor-navbar.component.html',
  styleUrls: ['./compressor-navbar.component.scss']
})
export class CompressorNavbarComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(AddCompressorComponent, {
      width: '250px'
    })
  }


}
