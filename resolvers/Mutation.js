const {v4:uuid } = require("uuid")

exports.Mutation = {
    addCategory: (parent, {input}, context) => {
        const {products, categories} = context
        const{name} = input

        const newCategory = {
            id: uuid(),
            name: name
        }
        categories.push(newCategory)

        return newCategory
    },
    addProduct:  (parent, {input}, context) => {
        const {products, categories} = context
        const{name, description, price, onSale, quantity, categoryName} = input

        const newProduct = {
            id: uuid(),
            name: name,
            description: description,
            price: price,
            onSale: onSale,
            quantity: quantity

        }

        // find the category
        var foundCategory = categories.find(category=> category.name === categoryName)
        console.log(foundCategory);
        if(foundCategory){
            newProduct.categoryId = foundCategory.id
            products.push(newProduct)
        }


        return newProduct


    },
    addReview:  (parent, {input}, context) => {
        const {products, reviews} = context
        const{title, comment, rating, productName} = input

        const newReview = {
            id: uuid(),
            title: title,
            comment: comment,
            rating: rating,

        }

        // find the category
        var productFound = products.find(product=> product.name === productName)
        console.log(products);
        if(productFound){
            newReview.date = new Date().toJSON().slice(0, 10);
            newReview.productId = productFound.id
            reviews.push(newReview)
        }


        return newReview


    }

}
