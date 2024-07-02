class CarritoCompra {
    constructor() {
        this.carrito = [];
    }

    agregarProducto(producto) {
        if (producto.precio <= 0 || producto.cantidad <= 0 || typeof producto.precio !== 'number' || typeof producto.cantidad !== 'number') {
            return;
        }

        const productoExistente = this.carrito.find(item => item.nombre === producto.nombre);

        if(productoExistente) {
            productoExistente.cantidad += producto.cantidad;
        }
        else{
            this.carrito.push(producto);
        }
    }

    calcularTotal() {
        let total = 0;

        for (let item of this.carrito) {
            total += item.precio * item.cantidad
        };

        return total;
    }

    aplicarDescuento(porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            return null;
        };

        const total = this.calcularTotal();
        return total - (total * (porcentaje / 100));
    }
}



module.exports = { CarritoCompra };
