const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        hello: [String!]!
        products(filter: ProductsFilterInput):[Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation {
      addCategory(input: AddCategoryInput!): Category!
      addProduct(input: ProductInput!): Product!
      addReview(input: ReviewInput!): Review!
    }


    type Product {
      id: ID!
      name: String!
      description: String!
      price: Float!
      image: String!
      onSale: Boolean!
      quantity: Int!
      category: Category
      reviews: [Review!]!
      review(id: ID!): Review
    }

    type Category {
      id: ID!
      name: String!
      products(filter: ProductsFilterInput):[Product!]!
    }

    type Review {
        id: ID!
        date: String!
        title: String!
        comment: String
        rating: Int
        productId: String
    }

    input ReviewInput {
        title: String!
        comment: String
        rating: Int!
        productName: String!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input ProductInput {
      name: String!
      description: String!
      price: Float!
      onSale: Boolean!
      quantity: Int!
      categoryName: String!
    }

    input AddCategoryInput {
      name: String!
    }
`
