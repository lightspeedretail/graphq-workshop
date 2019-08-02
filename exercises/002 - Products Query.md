# 002 - Products Query

Now that you know the basics of `Apollo` and `GraphQL`we can really start doing something.
I created an in memory datasource of products and product categories for you.

In this exercise I want you two create a `products` query so that you can query all products or filter on a name.

You should be able to execute following queries:


```gql
// should return a list of products
query {
    products {
        name
        price
        description
    }
}
```

```gql
// should return a list of products
query {
    products(name: "steak") {
        name
        price
        description
    }
}
```

```gql
// should return 1 product
query {
    product(id: "some-id") {
        name
        price
        description
    }
}
```

To access a datasource in a resolver, you will need the third parameter of your resolver function, the `context` argument.
This has a dataSources field with all the datasources in it. Don't worry we created the datasource for you and made sure that everything is initialised correctly.

eg: `context.dataSources.productsDataSource.deleteProduct(id)`