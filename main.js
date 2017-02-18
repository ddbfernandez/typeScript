///<reference path="animal.ts" />
function hablar(animal) {
    animal.hacerRuido();
}
var animales = new Array();
animales.push(new MySpace.Perro("Pepe"));
animales.push(new MySpace.Gato("Juan"));
animales.forEach(hablar);
