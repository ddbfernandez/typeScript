interface Animal{
	nombre:string;
	hacerRuido();
}

class Perro implements Animal{
	nombre:string;
	constructor(nombre:string){
		this.nombre=nombre;
	}
	hacerRuido(){
		alert("Guau"+this.nombre);
	}
}

class Gato implements Animal{
	nombre:string;
	constructor(nombre:string){
		this.nombre=nombre;
	}
	hacerRuido(){
		alert("Miau"+this.nombre);
	}
}

function hablar(animal:Animal){
	animal.hacerRuido();
}

var animales :Array<Animal> = new Array<Animal>();
animales.push(new Perro("Pepe"));
animales.push(new Gato("Juan"));

animales.forEach(hablar);
