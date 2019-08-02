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