import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCompressorComponent } from 'src/app/dialogs/add-compressor/add-compressor.component';
import { EditCompressorComponent } from 'src/app/dialogs/edit-compressor/edit-compressor.component';
import { ConfirmationDialogComponent } from 'src/app/dialogs/confirmation-dialog/confirmation-dialog.component';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Compressor } from 'src/app/models/compressor';


@Component({
  selector: 'app-compressors-list',
  templateUrl: './compressors-list.component.html',
  styleUrls: ['./compressors-list.component.scss']
})
export class CompressorsListComponent implements OnInit {

  displayedColumns: string[] = ['compressorId', 'compressorName', 'energyEfficiency', 'hourEfficiency', 'serialNumber', 'yearOfManufacture', 'actions'];

  dataSource = new MatTableDataSource([]);

  selectedCompressor: Compressor = new Compressor();
  
  constructor(private client: ClientService, public dialog: MatDialog) { }

  ngOnInit(){
    this.fetchAll();
  }

  fetchAll() {
    this.client.getAll().subscribe(value => {
      this.dataSource.data = value;
      console.log(value)
    })
  }

  searchRecord(search = '') {
    this.dataSource.filter = search.toLowerCase().trim();
  }

  openAddDialog() {
    this.selectedCompressor = {compressorId: '', compressorName: '', energyEfficiency: null, hourEfficiency: null, serialNumber: '', yearOfManufacture: null }
    
    const dialogRef = this.dialog.open(AddCompressorComponent, {
      data:{
        message: 'Dodaj Nowy Kompresor:',
        buttonText: {
          ok: 'Potwierdź',
          cancel: 'Anuluj'
        }
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog result: ' + result );
    })
  }

  openEditDialog() {
    const dialogRef = this.dialog.open(EditCompressorComponent, {
      data:{
        message: 'Czy na pewno usunąć?',
        buttonText: {
          ok: 'Potwierdź',
          cancel: 'Anuluj'
        }
      }
    })
  }

  openDeleteDalog(i: number, id: number, name: string, serial: number) {


    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data:{
        id: id,
        name: name,
        serial: serial,
        message: 'Czy na pewno usunąć kompresor ' + name + ' o numerze seryjnym: ' + serial + " ?",
        buttonText: {
          ok: 'Potwierdź',
          cancel: 'Anuluj'
        }
      }      
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      console.log(confirmed)
      console.log(i)
      console.log(id)
      console.log(name)
      this.client.deleteById(id).subscribe(() => {
        this.fetchAll();
      });
    });
  }
}
