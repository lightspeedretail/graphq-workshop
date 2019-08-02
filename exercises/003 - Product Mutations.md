# 002 - Product Mutations

It is nice that we can query for products, but let add some mutations to our service as well.
A mutation is meant to mutate some existing data. Besides this it acts the same way as a normal query.

The only difference is that you use the type `Mutation` instead of `Query` as root in your schema.
The resolvers are resolved in the same way as queries.

Add some mutations so that you can add products, modify products and delete products.

You should be able to execute following queries:


```gql
mutation {
    addProduct(name: "someName", price: 5, description: "description") {
        name
        price
        description
    }
}
```

```gql
mutation {
    updateProduct(id: "some-id", name: "steak") {
        name
        price
        description
    }
}
```

```gql
mutation {
    deleteProduct(id: "some-id")
}
```

The result of an add and update mutation should be the newly created or updated product. For the delete mutation you can just return the id of the deleted product.