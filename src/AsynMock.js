const products = [
        {
            id: "1",
            name:"leche",
            price: 650,
            category: "Lacteos",
            img: "",
            stock:30,
            description: ""
        },
        {
            id: "2",
            name:"cafe",
            price: 1550,
            category: "Cafe",
            img: "",
            stock:15,
            description: ""
        },
        {
            id: "3",
            name:"crema de leche",
            price: 450,
            category: "Lacteos",
            img: "",
            stock: 20,
            description: ""
        },
        {
            id: "4",
            name:"Bizcochito Don Satur",
            price: 580 ,
            category: "Galletitas",
            img: "",
            stock: 45,
            description: ""
        },
        {
            id: "5",
            name:"galletitas surtidas bagley",
            price: 870,
            category: "Galletitas",
            img: "",
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
            resolve(products.find(prod => prod.id == productId))
        }, 500)
    })
}

const getProductsByCategory = (categoryId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.filter(prod => prod.category == categoryId))
        }, 500)
    })
}

export { getProducts, getProductById, getProductsByCategory}
