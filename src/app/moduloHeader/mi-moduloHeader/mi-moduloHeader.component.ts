import { Component } from "@angular/core";

@Component({
    selector: 'mi-moduloHeader',
    templateUrl: './mi-moduloHeader.component.html'
})

export class MiModuloHeader{

    public inicio: string;
    public contacto: string;
    public categorias: string;
    public boton: string;

    constructor(){
        this.inicio = "INICIO";    
        this.contacto = "CONTACTO";
        this.categorias = "CATEGORIAS";
        this.boton = "Log in";
    }
}