import { Component, OnInit } from '@angular/core';
import { MiServicioGlobal } from 'src/app/services/servicio.service';

@Component({
  selector: 'app-panel-primario',
  templateUrl: './panel-primario.component.html',
  styleUrls: ['./panel-primario.component.scss']
})
export class PanelPrimarioComponent implements OnInit {

  constructor(private miServicio: MiServicioGlobal) { }

  ngOnInit(): void {
  }

  subir = () => {
    this.miServicio.incrementCounter();
  }

  bajar = () => {
    this.miServicio.decrementCounter();
  }

}
