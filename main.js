class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, img, code, stock) {
        if (!title || !description || !price || !img || !code || !stock) {
            console.log('Todos los campos son Obligatorio!');
            return;
        }

        if (this.products.some(item => item.code === code)) {
            console.log('El código debe ser único');
            return;
        }

        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            img,
            code,
            stock,
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if (!product) {
            console.log('Producto no encontrado');
        } else {
            console.log('Producto encontrado:', product);
        }
    }
}

//1) 
const manager = new ProductManager();

//2) 
console.log(manager.getProducts());

//3)
manager.addProduct('Royal Canin', 'Perro adulto mediano', 200, '🐩', 'perro1', 13);
manager.addProduct('Royal Canin', 'Gato adulto', 150, '🐈', 'gatos1', 15);

//4)
console.log(manager.getProducts());

//5) 
manager.getProductById(1);
