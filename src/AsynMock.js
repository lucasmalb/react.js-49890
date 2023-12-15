

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
