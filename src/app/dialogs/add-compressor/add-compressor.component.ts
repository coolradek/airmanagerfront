import { Component, Inject, Output, EventEmitter, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Compressor } from 'src/app/models/compressor';


@Component({
  selector: 'app-add-compressor',
  templateUrl: './add-compressor.component.html',
  styleUrls: ['./add-compressor.component.scss']
})
export class AddCompressorComponent {

  @Input() compressor: Compressor = new Compressor;
  @Output() compressorChange: EventEmitter<Compressor> = new EventEmitter<Compressor>();

  message: string = "Title"
  confirmButtonText: string = "Yes"
  cancelButtonText: string = "No"

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
    }

onConfirmClick(): void {

  this.update();

  this.dialogRef.close(true);
} 

update() {
  this.compressorChange.emit(this.compressor);
}

}
