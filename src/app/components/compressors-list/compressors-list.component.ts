import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-compressors-list',
  templateUrl: './compressors-list.component.html',
  styleUrls: ['./compressors-list.component.scss']
})
export class CompressorsListComponent implements OnInit {

  displayedColumns: string[] = ['compressorId', 'compressorName', 'energyEfficiency', 'hourEfficiency', 'serialNumber', 'yearOfManufacture'];

  dataSource = new MatTableDataSource([]);

  constructor(private client: ClientService) { }

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
}
