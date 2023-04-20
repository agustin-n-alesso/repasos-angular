import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import InicioComponent from './components/inicio/inicio.component';
import { PanelPrimarioComponent } from './components/panel-primario/panel-primario.component';
import { PanelSecundarioComponent } from './components/panel-secundario/panel-secundario.component';
import { CardComponent } from './components/shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PanelPrimarioComponent,
    PanelSecundarioComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
