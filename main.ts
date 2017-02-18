///<reference path="animal.ts" />


function hablar( animal:MySpace.Animal ) {
	animal.hacerRuido();
}


var animales:Array<MySpace.Animal> = new Array<MySpace.Animal>();
animales.push( new MySpace.Perro( "Pepe" ) );
animales.push( new MySpace.Gato( "Juan" ) );


animales.forEach( hablar );

