import { Component, OnInit } from '@angular/core';
import { MiServicioGlobal } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-panel-secundario',
  templateUrl: './panel-secundario.component.html',
  styleUrls: ['./panel-secundario.component.scss']
})
export class PanelSecundarioComponent implements OnInit {

  constructor(public miServicio: MiServicioGlobal) { }

  ngOnInit(): void {
  }

  transformar(valor:string){
    console.log(valor);
  }

}
