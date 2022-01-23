import { Component } from "@angular/core";

@Component({
    selector: 'mi-moduloBody',
    templateUrl: './mi-moduloBody.component.html'
})

export class MiModuloBody{

    public titulo: string;
    public comentario: string;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo esto es una prueba.";
        this.comentario = "Este es mi primer modulo";
        this.year = 2021;
    }
}