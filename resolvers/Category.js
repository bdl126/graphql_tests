const { products, categories } = require('../db');

exports.Category = {
    products: (parent, args, context) => {
        const {id} = parent
        const {products, categories} = context

        const categorydProducts =  products.filter((product) => product.categoryId == id)
        let categoryFilteredProducts = categorydProducts
        console.log(args.filter);
        if (args.filter) {
            if (args.filter.onSale === true)  {
                categoryFilteredProducts = categoryFilteredProducts.filter(product => {
                    return product.onSale
                })

            }
        }
        return categoryFilteredProducts
    }
}
