import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getById(compressorId: number): Observable<Compressor> {
    return this.http.get<Compressor>(this.baseUrl+'/'+compressorId)
  }

  addCompressor(newcompressor: Compressor): Observable<Compressor> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };
    return this.http.post<Compressor>(this.baseUrl+'/add', newcompressor, httpOptions)
  }

  deleteById(compressorId: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl+'/delete/'+ compressorId)
  }
}
