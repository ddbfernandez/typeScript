namespace MySpace {
	
	export class Perro implements Animal {
		nombre:string;
		
		constructor( nombre:string ) {
			this.nombre = nombre;
		}
		
		hacerRuido() {
			alert( "Guau " + this.nombre );
		}
	}
	
}

