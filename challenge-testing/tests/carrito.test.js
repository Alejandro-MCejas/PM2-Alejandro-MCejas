/* Desarrolla una clase en JavaScript llamada CarritoCompra que represente un carrito de compras. 
La clase debe tener los siguientes métodos:

1: constructor(): Inicializa el carrito como un array vacío.

2: agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

3: calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

4: aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.

Escribir pruebas unitarias utilizando Jest para asegurarte de que la clase CarritoCompra funciona correctamente 

en diferentes escenarios.*/ 

const { CarritoCompra } = require("../index.js")

let instance;
beforeEach(() => {
    instance = new CarritoCompra();
})


describe("Testeando la clase CarritoCompra", () => {

    it("CarritoCompra es una clase", () => {
        expect(CarritoCompra).toBeInstanceOf(Function);
        expect(instance).toBeInstanceOf(CarritoCompra);
    })

    it("La clase debe estar definida", () => {
        expect(CarritoCompra).toBeDefined();
    });

    it("La clase CarritoCompra tiene su constructor", () => {
        expect(instance).toBeInstanceOf(CarritoCompra)
    });

    it("La clase CarritoCompra tiene la propiedad carrito", () => {
        expect(instance).toHaveProperty("carrito");
    });

    it("El constructor de la clase CarritoCompra debe inicializar el carrito como un array vacío", () => {
        expect(instance.carrito).toEqual([]);
    });

    it("El método agregarProducto debe estar definido", () => {
        expect(instance.agregarProducto).toBeDefined();
    });

    it("El método agregarProducto debe agregar un producto al carrito", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.carrito).toHaveLength(1);
    })

    it("El método agregarProducto no debe agregar productos que no tengan precio o el precio sea un número negativo", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 0, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: -20, cantidad: 2 });
        expect(instance.carrito).toHaveLength(0);
    })

    it("El método agregarProducto no debe agregar productos que su cantidad sea 0 o sea un número negativo", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 0 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: -1 });
        expect(instance.carrito).toHaveLength(0);
    })

    it("El método agregarProducto debe incrementar la cantidad si el producto ya existe", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.carrito).toHaveLength(1);
        expect(instance.carrito[0].cantidad).toBe(4)
    })

    it("El método calcularTotal debe estar definido", () => {
        expect(instance.calcularTotal).toBeDefined();
    });

    it("El método calcularTotal debe calcular el total de la compra sumando todos los precios de los productos en el carrito", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.calcularTotal()).toBe(40);
    })

    it("El método aplicarDescuento debe estar definido", () => {
        expect(instance.aplicarDescuento).toBeDefined();
    });

    it("El método aplicarDescuento debe aplicar un descuento al total de la compra", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.aplicarDescuento(10)).toBe(36);
    })

    it("El método aplicarDescuento debe poder aplicar correctamente un descuento máximo al total de la compra (100%)", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.aplicarDescuento(100)).toBe(0);
    });

    it("El método aplicarDescuento debe poder manejar correctamente el precio cuando no hay descuento al total de la compra (0%)", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.aplicarDescuento(0)).toBe(120)
    })

    it("El método aplicarDescuento debe manejar descuentos fuera de rango", () => {
        instance.agregarProducto({ nombre: "Coca Cola", precio: 20, cantidad: 2 });
        expect(instance.aplicarDescuento(-1)).toBe(null);
        expect(instance.aplicarDescuento(101)).toBe(null);
    })

});