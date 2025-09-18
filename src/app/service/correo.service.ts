import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, signal, inject, computed } from '@angular/core';
import { enviroment } from '../../enviroments/enviroment'; 
@Injectable({
  providedIn: 'root'
})

export class CorreoService {

    private myAppUrl: string;
    private myAPIUrl: string;
    private http = inject( HttpClient );

    constructor() {
        this.myAppUrl = enviroment.endpoint;
        this.myAPIUrl ='';
    }


    sendCorreo(data:any): Observable<string> {
        return this.http.post<string>(`${this.myAppUrl}${this.myAPIUrl}api/correo/save/`,data)
    }


    


}