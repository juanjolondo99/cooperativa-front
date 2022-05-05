import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Asociado } from '../Modelos/Asociado';
import { Producto } from '../Modelos/Producto';
import { Movimiento } from '../Modelos/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class CoreServiceService {

  private base_url = environment.base_url;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  VerAsociados(): Observable<Asociado[]> {
    return this.http.get<Asociado[]>(this.base_url);
  }

  VerSaldos(asociadoId: string): Observable<Producto[]> {
    const url = `${this.base_url}/${asociadoId}/productos`;
    return this.http.get<Producto[]>(url);
  }

  VerMovimientos(asociadoId: string, productoId: string): Observable<Movimiento[]> {
    const url = `${this.base_url}/${asociadoId}/producto/${productoId}`;
    return this.http.get<Movimiento[]>(url);
  }

}
