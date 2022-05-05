import { Component, OnInit } from '@angular/core';
import { Asociado } from 'src/app/Modelos/Asociado';
import { CoreServiceService } from '../../servers/core-service.service'

@Component({
  selector: 'app-asociados',
  templateUrl: './asociados.component.html',
  styleUrls: ['./asociados.component.css']
})
export class AsociadosComponent implements OnInit {

  asociados: Asociado[] = [];

  constructor(private coreService: CoreServiceService) { }

  ngOnInit(): void {
    this.verAsociados();
  }

  verAsociados(): void {
    this.coreService.VerAsociados().subscribe(asociados => this.asociados = asociados);
  }
  
}
