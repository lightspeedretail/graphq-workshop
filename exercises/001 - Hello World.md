# 001 - Hello World

We have created a graphql application. Lets play with it.

## 1 Start your application

Open a terminal and navigate to the root directory of your application.

Make sure that your first install all your dependencies by running `npm install`.

Once this is done, you can start a dev environment by running `npm run dev`.

Now you can access the GraphQL playground by navigating to http://localhost:3000/graphql in your browser.

This playground is an interactive shell where you can execute queries and inspect your schema.

The dev environment is watching your source files and will restart your server every time you change something.

## 2 Running your first query

In the playground you have two panes, a left one and a right one. In the left one you can type your queries, in the right one you will see your result.

To execute a query, you can press the big play button in the middle.

Don't worry if you don't know the syntax by heart, the shell is autocompleting and will help you as much as possible.

To start a grapql query, we first have to specify if we want to perform a `query`, `mutation` or `subscription`

Right now we want to execute a query so we type `query {}` in the shell.

Now we can specify which query we want to execute. Tip, you can find your root queries back in your type schemas (eg: `hello-world.types.ts`).

Enter a query and see the result.

## 3 Adding a parameter to your query

Of course you can add parameters to your api. Lets try to add a parameter to your hello world query.

You can add a parameter by updating your schema: `hello-world.types.ts`

You can add a parameter by adding the parameter name and type between brackets your query name:

```gql
type Query {
    someQuery (someParameter: $type): $type
}
```

Now add a parameter named `greeter` of the type `String` to your hello world query.

Refresh your playground and you will see that you can add a parameter to your query now.

Of course, our result is still the same because we haven't done anything with the parameter yet.

You can access the query parameter in the second argument of your resolver `hello-world.resolvers.ts`.

The first argument is your parent object which will always be `null` for root queries. The second argument are the parameters map of the query.

If you have parameters `(p1: "foo", p2: "bar")` your parameter map will be `{ p1: "foo", p2: "bar" }` .

Now change the resolver so that it returns the `greeter` param instead of the fixed `World` string.

Go to your playground and see if your new query works.

## 4 Adding some complex types to your query

For now, our `hello` query just returns a string. But we could also let it return complex types.

You can do this by creating your own type in your schema. you start a custom type by using the `type` keyword followed by the name of your type. Then you can give your type some fields.

This fields follow the same pattern as the existing `Query` type. Each field has a name, can have some parameters and have a type. This type could be an atomic type (String, Int, Float, [String]...) or another complex type.

Lets keep it simple for now and add a type named `HelloWorld` with the fields `greeter` which is a `String` and the field `at` which is also a `String`.

Do not forget to change the type of your `hello` query to the newly created type `HelloWorld`.

Go back to your playground and re-run your latest query. You will see that GraphQL returns an error: `Field \"hello\" of type \"HelloWorld\" must have a selection of subfields.`

Since we return a complex object, you now have to specify which subfields you want to return.

You can do this by adding the fields that you want get withing curly braces after your query, eg:

```gql
query {
  someQuery {
    someField1
    someField2
  }   
}
```

Now add the `greeter` and `at` field to the query and re-run the query. You will see that you fixed the errors, but the result only has `null` values. Can you guess why?

You are right, we still have to update our resolver. Our resolver is still returning a string instead of an object. Because of this, Apollo can't find the fields to pick and returns `null`.

Now go to your resolver and return an object with the `greeter` and `at` field. The greeter field can contain your greeter parameter and the at field can contain the current date.

Some javascript tips:
- The shorthand notation to return an object in a function is `(someParam) => ({ someField: value });`
- You can generate a date string by calling `new Date().toLocaleString()`

Now everything should work again. You don't need to specify all subfields. GraphQL only returns what you ask for.

## 5 Adding a subquery

Our query is still fairly easy. We have one query and one resolver. And the performance gain of only returning the fields that you ask for aren't really obvious right now. For instance, even when we are not asking for the `at` field, it would still create the date in memory because everything is part of the same resolver.

But imagine that we needed to access a database instead. It would not be performant that we would need to access a database for a field that we don't really need.

So how can we change this? We can add a new resolver for the type `HelloWorld` and the field `at`. This way, the resolver will only run if the field `at` is really requested.

For starters, we will remove the `at` field from our existing `hello` resolver. This resolver should now only create an object with the field `greeter` in it.

Afterwards you can create a new resolver. First we need to specify the schema type we are creating the resolver for. In our case this would be `HelloWorld`. Then in this object we can specify the fields that we want to create a resolver for. In our case this would be the `at` field. The resolver itself is just a function that returns a datestring like before.

In our new resolver we have a source param. Contrary to the root queries, this argument now has a value. It contains the object returned by the parent query (in this case the root `hello` query). This way, your sub resolver can make use of the parent object if needed.

With this pattern you can start chaining queries to eachother and create something really powerfull. The resolver will only receive the object returned by his direct parent as source. He does not get his ancestor's returned objects.