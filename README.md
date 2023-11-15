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

- install simple-redis

```
    npm i simple-redis

```

- using library[client.js]

- commons js

```
    const { set } = require("simple-redis");
    const client = require("./config.js");

```

- es6 module

```
    import { set } from "simple-redis";
    import client from "./config.js";

```

- save method

```
  import { set } from "simple-redis";
  import client from "./config.js";

    args = {
            key: "cache_1",
            value: "cache 1",
            expiration: 60,
        };

    const save = async () => {

          await set(client, args);
    };

    // or

    const save = async () => {

        await set(client, { key: "cache_1", value: "cache 1", expiration: 60, });
    };
```

- get method

```
  import { get } from "simple-redis";
  import client from "./config.js";

    let args = { key: "cache_1" };

    const getter = async () => {

        const response = await get(client, args);
        return response;
    };

    // or

    const getter = async () => {

        const response = await get(client, { key: "cache_1" });
        return response;
    };
```

### Error message

```
throw new TypeError('Invalid argument type')

```

```
this error is sended when type object is different from type object Cache

```

- Ex:

```
let data = {
    data: "cache_1",
    val: "cache 1",
    exp: 0
}

```

# Author

Leonardo Sousa

https://www.linkedin.com/in/leonardo-dos-santos-sousa-238651173/
