namespace MySpace {

	export class Gato implements Animal {
		nombre:string;
		
		constructor( nombre:string ) {
			this.nombre = nombre;
		}
		
		hacerRuido() {
			alert( "Miau " + this.nombre );
		}
	}

}

