### How to use
```Node.js
npm install
node app.js
```
See your server [here](http://localhost:9999).

### Things to take note of
Here you can see the project structure of a simple http service.

* `/config` is where all `SandGrain`s find their configuration files.
* `/config/routes.js` is where `sand-http` finds its Controller routes map.
* `/config/http.js` is where `sand-http` finds its server configuration including bind port.
* `/controllers` is where all `sand-http` controllers are loaded from.