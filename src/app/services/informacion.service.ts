import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  charge: boolean = false;
  charge_sobre_nosotros: boolean = false;
  equipo: any[] = [];

  constructor( public http: Http ) {

    this.carga_info();
    this.carga_sobre_nosotros();

  }


   public carga_info () {
    this.http.get('assets/data/info.pagina.json')
    .subscribe( data => {
      // console.log(data.json());
      this.charge = true;
      this.info = data.json();
    });

   }
   public carga_sobre_nosotros() {
    this.http.get('https://mi-web-e7ffb.firebaseio.com/equipo.json')
    .subscribe( data => {
      // console.log(data.json());
      this.charge_sobre_nosotros = true;
      this.equipo = data.json();
    });
   }

}
