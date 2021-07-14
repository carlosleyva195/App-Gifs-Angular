import { Component, ViewChild, ElementRef } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

//INJERTAR EL SERVICIO
constructor ( private GifsService: GifsService){}

  buscar(  ){
    const valor = this.txtBuscar.nativeElement.value;

    //CUANDO NO INGRESAS NADA EN EL BUSCADOR
    if (valor.trim().length === 0){
      return;
    }

    this.GifsService.buscarGifs( valor );
    this.txtBuscar.nativeElement.value='';

  }
}
