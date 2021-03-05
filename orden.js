class Orden {

    static contadorOrdenes = 0;
    contador

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        //this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
        }
        else {
            console.log('Has alcanzado el máximo de productos')
        }
    }

    calcularTotal() {
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.precio;
        }

        return totalVenta;
    }

    mostrarOrden() {
        productosOrden = ' ';
        for(let producto of this._productos) {
            productosOrden += producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden}, Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}

//prueba 
let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
