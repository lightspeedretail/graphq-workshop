# 002 - Product Categories Chaining

As a last exercise (for now) we will apply the sub query principle to our product categories.
For now we can query categories and products separately. This means that if we want all products from a particular category that we have to execute 2 queries. One to fetch the categoy and its product ids. And then one query for fetching those products matching those ids.

We can do better as this. We can add a subQuery to the category type which will fetch the products for us.

You should be able to execute following queries:


```gql
query {
    productCategories {
        name
        price
        description
        products {
            name
            description
            price
        }
    }
}
```

```gql
query {
    productCategory(id: "some-id") {
        name
        price
        description
        products {
            name
            description
            price
        }
    }
}
```

As a last exercise it would be cool to add a mutation so that you actually can add products to a category.
Add a mutation named `addProductsToCategory` that accepts a list of productIds and a category id as parameter. It should return the updated category as result.

An example query:

```gql
mutation {
  addProductsToCategory(
    products: [
      "a0a33f01-2820-4780-8e49-c87fd0c34bee"
      "0044f017-cb43-45d3-98bf-6bb3345304c4"
    ]
    category: "6e7e148a-c23a-4094-a71a-04b3b46273c4"
  ) {
    name
    products {
      name
    }
  }
}
```