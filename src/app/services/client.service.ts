import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compressor } from '../models/compressor';




@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/api/compressor'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Compressor[]> { 
    return this.http.get<Compressor[]>(this.baseUrl+'/all');
  }

  addCompressor(newcompressor: Compressor) {
    return this.http.post(this.baseUrl+'/add', newcompressor)
  }
}
