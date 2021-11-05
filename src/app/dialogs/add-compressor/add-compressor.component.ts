import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Compressor } from 'src/app/models/compressor';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-compressor',
  templateUrl: './add-compressor.component.html',
  styleUrls: ['./add-compressor.component.scss']
})
export class AddCompressorComponent {

  constructor(@Inject (MAT_DIALOG_DATA) public data: any) { }


}
