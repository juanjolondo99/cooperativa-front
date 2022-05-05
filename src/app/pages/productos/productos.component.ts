import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoreServiceService } from '../../servers/core-service.service';
import { Producto } from 'src/app/Modelos/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  asociadoId: string;

  constructor(private route: ActivatedRoute, private coreService: CoreServiceService) { }

  ngOnInit(): void {
    this.VerSaldos();
  }

  VerSaldos(): void {
    this.asociadoId = this.route.snapshot.paramMap.get('id');
    this.coreService.VerSaldos(this.asociadoId).subscribe(productos => this.productos = productos);
  }
}
