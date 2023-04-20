const fs = require('fs');

class ProductManager{
    constructor(path){
        this.path = path
    }

    fileExist(){
        return fs.existsSync(this.path)
    }

    #nuevoId(){
        let maxId = 0;
        this.products.map((product) => {
            if(product.id > maxId) maxId = product.id;
        });
        return maxId
    }

    async addProduct(prod){
        try {
            const productsFile = await this.getProducts();
            const genereteId = prod.this.#nuevoId();
            productsFile.push(prod);
            await fs.promises.writeFile(this.path, JSON.stringify(productsFile, genereteId));
        } catch (error) {
            console.log(error);
        }
    }

    async getProducts(){
        try {
            if(this.fileExist(this.path)){
                const products = await fs.promises.readFile(this.path,'utf-8');
                const productsJS = JSON.parse(products);
                return productsJS;
            }else{
                return [];
            }
        } catch (error) {
            
        }
    }

    async getProductById(id){
        try {
            if(this.fileExist()){
                const products = await fs.promises.readFile(this.path,'utf-8')
                const productsJS = JSON.parse(products)
                const product = products.find((product) => product.id === id);
            if(product){
                return product;
            }else{
                new Error('No se encontró el id')
            }}else{
                new Error('No hay archivo')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async deleteProduct(id){
        try {
            if(this.fileExist()){
                const products = await fs.promises.readFile(this.path,'utf-8')
                const productsJS = JSON.parse(products)
                const product = products.find((product) => product.id === id);
                if(product){
                    const productToDelete = product.filter((product)=> product.id !== id)
                    await fs.promises.writeFile(this.path, JSON.stringify, productToDelete)
                }else{
                    new Error('No se encontró el id')
                }
            }else{
                new Error('No hay archivo')
            }
        } catch (error) {
            console.log(error);
        }
    }

    async updateProduct(){
        try {
            
        } catch (error) {
            
        }
    }



}

const manager = new ProductManager('./productos.json')

const product1 = {
    title: 'Producto de prueba 1',
    description: 'descripcion del producto 1',
    price: 79000,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 20
}
const product2 = {
    title: 'Producto de prueba 2',
    description: 'descripcion del producto 2',
    price: 50000,
    thumbnail: 'sin imagen',
    code: 'abc456',
    stock: 25
}
const product3 = {
    title: 'Producto de prueba 3',
    description: 'descripcion del producto 3',
    price: 65000,
    thumbnail: 'sin imagen',
    code: 'abc123',
    stock: 15
}

const test = async() => {
    try {
        const get = await manager.getProducts()
        console.log('primer producto', get);
        await manager.addProduct(product1)
        const get2 = await manager.getProducts()
        console.log('segundo producto', get2)
        await manager.addProduct(product2)
        const get3 = await manager.getProducts()
        console.log('tercer producto', get3);
        await manager.addProduct(product3)
        await manager.getProductById(2);
        console.log(getProductById);
        await manager.deleteProduct(1);
    } catch (error) {
        console.log(error);
    }
}

test()