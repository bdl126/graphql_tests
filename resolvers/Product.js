
exports.Product = {
    category: (parent, args, context) => {
      const categoryId  = parent.categoryId
      const {products, categories} = context

      return categories.find((category) => category.id == categoryId)
    },
    reviews: (parent, args, context) => {
      const productId = parent.id
      const {reviews} = context

      return reviews.filter((review) => review.productId == productId)

    },
    review: (parent, args, context) => {
      const reviewId = args.id
      const {reviews} = context

      return reviews.find((review) => review.id == reviewId)

    }
  }
