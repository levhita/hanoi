# HANOI

Yet another Tower of Hanoi - Server and FrontEnd Combo.

## Architecture

It's a monorepo with **expressjs** to serve the API in the `/` directory, and a frontend in the `frontend/` directory made with **React**.

The frontend has to be built before first, then **expressjs** will serve it from the `/frontend/build/` directory.

## Install && run

```
npm install
cd ./frontend/ && npm install && npm run build
npm start
```

## Development

Even tought production environment requires a proper build, for development you will probably want hot-reloading.

Open 2 shells in the first one run **expressjs** in watch mode, it will restart the server on any change to `js`,
`mjs`,`cjs` and `json` files, it will start on port 3000.

```
npm run watch
```

In the second one start the **React** app, it will take port 3001 and rebuild on every change.

```
npm start
```
