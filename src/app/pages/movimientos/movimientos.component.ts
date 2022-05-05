import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoreServiceService } from '../../servers/core-service.service';
import { Movimiento } from 'src/app/Modelos/Movimiento';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {

  movimientos: Movimiento[] = [];

  asociadoId: string;

  constructor(private route: ActivatedRoute, private coreService: CoreServiceService) { }

  ngOnInit(): void {
    this.VerMovimientos();
  }

  VerMovimientos(){
    this.asociadoId = this.route.snapshot.paramMap.get('idAsociado');
    const productoId = this.route.snapshot.paramMap.get('idProducto');
    this.coreService.VerMovimientos(this.asociadoId, productoId).subscribe(movimientos => this.movimientos = movimientos);
  }

}
