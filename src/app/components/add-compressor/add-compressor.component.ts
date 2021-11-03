import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Compressor } from 'src/app/models/compressor';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-compressor',
  templateUrl: './add-compressor.component.html',
  styleUrls: ['./add-compressor.component.scss']
})
export class AddCompressorComponent implements OnInit {

  newCompressor: Compressor;

  constructor(private client: ClientService, private router: Router) {
    this.newCompressor = new Compressor();  
   }

  ngOnInit(): void {  }

  addCompressor(name: string, eeficiency: string, heficiency:string, serialno:string, year:string) {

    this.newCompressor.compressorName = name;
    this.newCompressor.energyEfficiency = parseFloat(eeficiency);
    this.newCompressor.hourEfficiency = parseFloat(heficiency);
    this.newCompressor.serialNumber = serialno;
    this.newCompressor.yearOfManufacture = parseInt(year);
    this.client.addCompressor(this.newCompressor).subscribe(answer => {
        console.log(answer);
        /**  this.router.navigate(['']); **/
    });
  }

}
