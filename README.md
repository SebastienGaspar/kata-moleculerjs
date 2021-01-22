[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# kata
This is a [Moleculer](https://moleculer.services/)-based microservices project. Generated with the [Moleculer CLI](https://moleculer.services/docs/0.14/moleculer-cli.html).

To start it:
 * run `$npm i`
 * run `$docker-compose up` to up the whole stack needed
 * Get the name of the container for the service: `gophertown`
 * run `$docker exec -it CONTAINER_NAME moleculer connects nats://nats:4222` to connect to the REPL
 * Start the Kata

## Definition

We want to create a small *town*:
    * A town object should have a name and a width/height definition
    * Create an action to handle the creation of the town on memory
    * Create an action to get a town data

Add gophers
    * Create an action to add a gopher to a town: a gopher have a name(hash/id) and a position (x,y)
    * Create an action to get list all gophers created

Add move a gopher to a town:
    * Create an action on the gophers to move them to a town (so the town need to follow the list of the living gophers)
    * Add the posibility to create the gopher directly inside a town

Add start using events:
    * Delete all action calls made from one service to an other service.

## Usage
Start the project with `npm run dev` command.
After starting, open the http://localhost:3000/ URL in your browser.
On the welcome page you can test the generated services via API Gateway and check the nodes & services.

In the terminal, try the following commands:
- `nodes` - List all connected nodes.
- `actions` - List all registered service actions.
- `call greeter.hello` - Call the `greeter.hello` action.
- `call greeter.welcome --name John` - Call the `greeter.welcome` action with the `name` parameter.
- `call products.list` - List the products (call the `products.list` action).


## Services
- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.
- **products**: Sample DB service. To use with MongoDB, set `MONGO_URI` environment variables and install MongoDB adapter with `npm i moleculer-db-adapter-mongo`.

## Mixins
- **db.mixin**: Database access mixin for services. Based on [moleculer-db](https://github.com/moleculerjs/moleculer-db#readme)


## Useful links

* Moleculer website: https://moleculer.services/
* Moleculer Documentation: https://moleculer.services/docs/0.14/

## NPM scripts

- `npm run dev`: Start development mode (load all services locally with hot-reload & REPL)
- `npm run start`: Start production mode (set `SERVICES` env variable to load certain services)
- `npm run cli`: Start a CLI and connect to production. Don't forget to set production namespace with `--ns` argument in script
- `npm run lint`: Run ESLint
- `npm run ci`: Run continuous test mode with watching
- `npm test`: Run tests & generate coverage report
- `npm run dc:up`: Start the stack with Docker Compose
- `npm run dc:down`: Stop the stack with Docker Compose
