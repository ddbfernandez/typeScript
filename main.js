var Perro = (function () {
    function Perro(nombre) {
        this.nombre = nombre;
    }
    Perro.prototype.hacerRuido = function () {
        alert("Guau" + this.nombre);
    };
    return Perro;
}());
var Gato = (function () {
    function Gato(nombre) {
        this.nombre = nombre;
    }
    Gato.prototype.hacerRuido = function () {
        alert("Miau" + this.nombre);
    };
    return Gato;
}());
function hablar(animal) {
    animal.hacerRuido();
}
var animales = new Array();
animales.push(new Perro("Pepe"));
animales.push(new Gato("Juan"));
animales.forEach(hablar);
