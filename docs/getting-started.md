# Getting Started

Welcome to the Getting Started guide! This guide assumes you have already installed [Node.js](https://nodejs.org).

# What is Sand?

Sand is a lightweight, all-purpose Javascript application framework. Sand provides a simple, yet robust, application lifecycle and many pluggable clients and libraries.

Lifecycle features include:

#### Initialization/Start/Shutdown hooks
Execute custom code before the app starts, when the app starts, and when the app shuts down.

#### Automatic config loading by environment
When Sand initializes all its plugins, each plugin will automatically load its proper configuration based on the application execution environment specified in `process.env.NODE_ENV`. Some common plugins include MySQL, Memcache, ElasticSearch, etc. If your app doesn't use execution environments, don't worry! There's a default config section for that.

#### Unique Execution Context
Sand provides a generic, unique "per request" execution context for any job. "per request" may be understood in the same way as a typical web application request that has it's own execution environment.

#### Simple, Robust Plugin system
Sand provides a simple Plugin API. All plugins are called `Grains`. A grain provides a simple API of `init`, `start`, and `shutdown` which the main Sand application invokes at the appropriate lifecycle point.

# Web Applications

One of Sand's strongest features is it's fully featured, all-purpose Web Application Server provided in [sand-http](https://github.com/SandJS/http).

Sand [HTTP](https://github.com/SandJS/http) provides:

- Regular Expression based routing
- Request Middleware à la [Express.js](http://expressjs.com/)
- MVC support
- Model querying (M from MVC) with Sand [MySQL](https://github.com/SandJS/mysql). MySQL is the most commonly used Model library, but any ORM can be adapted to be used in Sand with Sand's easy plugin system.
- View Rendering (V from MVC) with the template language of your choice ([EJS](https://github.com/tj/ejs), [Jade/Pug](http://jade-lang.com/), etc.)
- Route mappings to Controller/Actions (C from MVC)
- Any ORM may be made pluggable using Sand's plugin system. 

# The simplest Sand application

You can create **ANY** kind of Node.js application, script, or service using Sand.

The simplest Sand application is shown below.

```JavaScript
let Sand = require('sand');
let app = new Sand();
app.start(function () {
  console.log('Hello, World!');
});
```

The `require('sand')` loads the Sand Application class. 

To create a new application, simply instantiate the Sand Application class.

Only once instance of a Sand application is allowed. When the Application has been instantiated, the `global.sand` variable will be set with that instance. All modules and application files will be able to references the main application instance by `global.sand` or just `sand`.

Passing a callback to `Sand#start()` will ensure that the code in your callback gets executed _after_ the application has started.

# Using Grains

A Sand "grain" is a plugin for the Sand.js Application. 

- A grain is an npm package that exports a class extending `SandGrain` found in the [sand-grain](https://github.com/pocketly/sand-grain). 
- The class implements member functions `init`, `start`, and `shutdown` callbacks which are invoked by the Sand Application. These callbacks may be used to load and dispose of any resources that the plugin provides to the application.
- The class loads it's config from the `config` directory in the project and sets it on the class instance.
- The Sand application creates a new instance of the grain, and sets it on the sand application instance so that it may be accessed from any file in the application in the syntax `sand.customGrain`.


1. Ensure that the grain is installed in your project directory.
1. In your project directory, create a directory named `config`.
1. In that `config` directory, create a file named `<custom-grain>.js`.

```JavaScript
let CustomGrain = require('sand-<custom-grain>');
let Sand = require('sand');

let app = new Sand() // initialize the application
  .use(CustomGrain); // load the sand grain 

app.start(function () { // start the application
  console.log('Hello, World!');
});
```

The `Sand#use()` function loads a Sand Grain into the application.

# A simple HTTP Web Application

