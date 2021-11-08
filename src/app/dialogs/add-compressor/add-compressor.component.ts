import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Compressor } from 'src/app/models/compressor';


@Component({
  selector: 'app-add-compressor',
  templateUrl: './add-compressor.component.html',
  styleUrls: ['./add-compressor.component.scss']
})
export class AddCompressorComponent {

  message: string = "Title"
  confirmButtonText: string = "Yes"
  cancelButtonText: string = "No"

  nowykompresor: String;


  @Output() newcompressor = new EventEmitter<String>();

  constructor(
    @Inject (MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AddCompressorComponent>) {
      if(data) {
        this.message = data.message || this.message;
        if(data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
      }
      this.nowykompresor = 'Nazwa nowego kompresora'
    }

onConfirmClick(): void {

  this.eksport();

  this.dialogRef.close(true);
} 

eksport() {
  this.newcompressor.emit(this.nowykompresor);
}

}
