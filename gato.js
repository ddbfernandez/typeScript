var MySpace;
(function (MySpace) {
    var Gato = (function () {
        function Gato(nombre) {
            this.nombre = nombre;
        }
        Gato.prototype.hacerRuido = function () {
            alert("Miau " + this.nombre);
        };
        return Gato;
    }());
    MySpace.Gato = Gato;
})(MySpace || (MySpace = {}));
