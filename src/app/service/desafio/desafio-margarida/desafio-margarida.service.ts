import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesafioMargaridaService {


  api = 'http://localhost:3000/desafio-margarida'

  constructor(private http: HttpClient){}

  get(){
    return this.http.get<any>(`${this.api}`)
  }

  edit(id: number, status: boolean): Observable<any>{
    return this.http.patch<any>(`${this.api}/${id}`,  { status: status })
  } 
}

