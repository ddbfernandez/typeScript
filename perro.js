var MySpace;
(function (MySpace) {
    var Perro = (function () {
        function Perro(nombre) {
            this.nombre = nombre;
        }
        Perro.prototype.hacerRuido = function () {
            alert("Guau " + this.nombre);
        };
        return Perro;
    }());
    MySpace.Perro = Perro;
})(MySpace || (MySpace = {}));
