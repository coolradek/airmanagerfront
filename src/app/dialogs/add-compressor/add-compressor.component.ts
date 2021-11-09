import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-compressor',
  templateUrl: './add-compressor.component.html',
  styleUrls: ['./add-compressor.component.scss']
})
export class AddCompressorComponent {

  message: string = "Title"
  confirmButtonText: string = "Yes"
  cancelButtonText: string = "No"

  public currentValue: string = null;

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddCompressorComponent>) {
      console.log(data.compressor);
      if(data) {
        this.message = data.message || this.message;
        if(data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
    }

    cancelDialog() {
      console.log('Cancelled !!!');
    }

    yesDialog() {
      console.log(this.data.compressor.compressorName);
      if(this.data.compressor.compressorName != undefined && this.data.compressor.compressorName != '') {
        this.dialogRef.close(this.data)
      }
      
    }
}
