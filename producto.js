class Producto {

    static contadorProductos = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }
    
    set precio(precio) {
        this._precio = precio;
    }

    toString(){

        return `idProducto: ${this._idProducto} \n
                Nombre: ${this._nombre} \n
                Precio: $${this._precio}`;
    }
}

let producto1 = new Producto('Microondas', 10000);
let producto2 = new Producto('Heladera', 40000);

console.log(producto1.toString());
console.log(producto2.toString()); 