# Simple-Redis

## About project

- 🔭 This app is thinked to build simple operations, using
  one of the most popular cache db of market and make easy your use inside your app.

### Usage

- install redis 

```
    npm i redis

```
- configuring redis [config.js]

    - commons js

```
    const Redis = require("redis")

    module.exports = Redis.createClient({})

```
 - es6 module

```
    import { createClient } from "redis"

    export Redis.createClient({})

```

### Error message

- throw new TypeError('Invalid argument type')

```
this error is sended when type object sended is incoreectly

ex: let data = {
    data: "cache_1",
    val: "cache 1",
    exp: 0
}

```

# Author

Leonardo Sousa

https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/
