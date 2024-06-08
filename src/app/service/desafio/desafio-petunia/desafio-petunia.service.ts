import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesafioPetuniaService {

  api = 'http://localhost:3000/desafio-petunia'

  constructor(private http: HttpClient){}

  get(){
    return this.http.get<any>(`${this.api}`)
  }

  edit(id: number, status: boolean): Observable<any>{
    return this.http.patch<any>(`${this.api}/${id}`,  { status: status })
  } 
}
