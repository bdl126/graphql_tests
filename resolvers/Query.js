const { reviews } = require("../db");

exports.Query = {
    hello: (parent, args, context) => {
        return ["fu"];
    },
    products:(parent, args, context) => {
        const {products, categories} = context
        let filteredProducts = context.products

        if (args.filter) {
            const {onSale, avgRating} = args.filter
            if (onSale === true)  {
                filteredProducts = filteredProducts.filter(product => {
                    return product.onSale
                })
            }
            if([1,2,3,4,5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((product)=> {
                    let sumRating =0
                    let numberOfReviews =0
                    reviews.forEach(review => {
                        if (review.productId === product.id) {
                            sumRating +=review.rating
                            numberOfReviews++
                        }
                    })
                    const avgProductRating = sumRating /numberOfReviews
                    return avgProductRating >= avgRating
                })
            }
        }
        return filteredProducts
    },
    product:(parent, args, context) => {
      const {id} = args
      const {products, categories} = context

      return products.find(product => product.id == id)
    },
    categories :(parent, args, context) => context.categories,
    category: (parent, args, context) => {
      const {id} = args
      const {products, categories} = context

      return categories.find(category => category.id == id)
    },
}
