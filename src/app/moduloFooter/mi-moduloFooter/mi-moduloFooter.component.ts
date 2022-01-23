import { Component } from "@angular/core";

@Component({
    selector: 'mi-moduloFooter',
    templateUrl: './mi-moduloFooter.component.html'
})

export class MiModuloFooter{

    public footer: string;

    constructor(){
        this.footer = "Footer@Footer";
    }
}