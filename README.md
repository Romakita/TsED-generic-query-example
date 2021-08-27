# Ts.ED generic query example

## Intro

I have one controller with one endpoint : GET /rest/hello

I want to have a pagination object with a "where" generic property
that I can reuse everywhere in my code.
In my example I use `PaginationQuery<FindQuery>`.

So the endpoint should look like this :

http://localhost:8083/rest/hello?offset=10&where={tableColumnNameA:8}

(URL-encoded :
http://localhost:8083/rest/hello?offset=10&where=%tableColumnNameA%3A8%7)


## Results

When validation is turned on, I have this error :
```
MissingRefError: can't resolve reference T from id #
```

So I tryed turning it off so I can log the query variable, and the result is :
```json
{
    "offset": 10,
    "where": "{tableColumnNameA:8}"
}
```

I noticed that "where" isn't serialized.


## Solution

I removed "where" from PaginationQuery and now indQuery extends PaginationQuery.
I call the endpoint like this :

http://localhost:8083/rest/hello?offset=10&tableColumnNameA:8
