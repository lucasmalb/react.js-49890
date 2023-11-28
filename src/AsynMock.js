const products = [
        {
            id: "1",
            name:"Leche Multivitaminas 3% La Serenísima Sachet 1l",
            price: 650,
            category: "Lacteos",
            img: "https://masonlineprod.vtexassets.com/arquivos/ids/266127-230-230?v=638056030146930000&width=230&height=230&aspect=true",
            stock:30,
            description: "Descripción del producto Leche Multivitaminas 3% La Serenísima Sachet 1l Leche ultrapasteurizada homogeneizada, fortificada con vitaminas A y D. Libre de gluten. Funte de vitaminas C y E."
        },
        {
            id: "2",
            name:"Cafe Instantaneo La Virginia Seleccion Tostado 100g",
            price: 1550,
            category: "Cafe",
            img: "https://masonlineprod.vtexassets.com/arquivos/ids/250089-230-230?v=637907529879570000&width=230&height=230&aspect=true",
            stock:15,
            description: "Descripción del producto Cafe Instantaneo La Virginia Seleccion Tostado 100g"
        },
        {
            id: "3",
            name:"Crema De Leche La Paulina 200 Cc",
            price: 450,
            category: "Lacteos",
            img: "https://masonlineprod.vtexassets.com/arquivos/ids/244847-230-230?v=637872862731070000&width=230&height=230&aspect=true",
            stock: 20,
            description: "Descripción del producto Crema De Leche La Paulina 200 Cc"
        },
        {
            id: "4",
            name:"Bizcochos De Grasa Don Satur 200gr",
            price: 580 ,
            category: "Galletitas",
            img: "https://masonlineprod.vtexassets.com/arquivos/ids/165631-230-230?v=637835137429100000&width=230&height=230&aspect=true",
            stock: 45,
            description: ""
        },
        {
            id: "5",
            name:"Galletitas Variedad Surtidas Terrabusi 390g",
            price: 870,
            category: "Galletitas",
            img: "https://masonlineprod.vtexassets.com/arquivos/ids/282433-230-230?v=638191677926000000&width=230&height=230&aspect=true",
            stock: 17,
            description: ""
        },
    ]

const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}



const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export { getProducts, getProductById, getProductsByCategory}
