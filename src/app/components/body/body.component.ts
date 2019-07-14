import { Component } from '@angular/core';


@Component({
    selector:'app-body',
    templateUrl:'./body.component.html'
})

export class BodyComponent{
    mostrar:boolean=true;
    frase:any = {
        cita:"Hola Mundo",
        autor:"Agus Chiarotto",
    };

    personajes:string[]= [
            'Agus','David','Anatasia'
    ]
    

}