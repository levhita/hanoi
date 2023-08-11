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

### Deploy to Digital Ocean

This repo can automatically be deployed to Digital Ocean App Platform, and keept up to date with the changes here, excellent for some light continous integration.

You need a DigitalOcean account. If you don't already have one, you can sign up at https://cloud.digitalocean.com/registrations/new.

You will need to fork this repo if you want to make updates your self, be ahead don't be shy and leave a star.

Click this button to deploy the app. If you are not logged in, you will be prompted to log in with your DigitalOcean account.

[![Deploy to DigitalOcean](https://www.deploytodo.com/do-btn-blue.svg)](https://cloud.digitalocean.com/apps/new?repo=https://github.com/levhita/hanoi/tree/main)

1. In the first screen you will see a **hanoi Web Service resource** click edit on it.
1. Edit and Save the **Build Command** so it reads `cd frontend && npm run build:digitalocean`
1. Edit and Save the **Run Command** so it reads `npm start`
1. Click back at the bottom to continue.
1. Provide a name for your app and select which region you want to deploy your app to and click **Next**. The closest region to you should be selected by default. All App Platform apps are routed through a global CDN. So this will not affect your app performance, unless it needs to talk to external services.
1. On the following screen, leave all the fields as they are and click **Next**.
1. Confirm your **Plan** settings and how many containers you want to launch and click **Launch Basic/Pro App**.
1. You should see a "Building..." progress indicator. You can click **View Logs** to see more details of the build.
1. It can take a few minutes for the build to finish, but you can follow the progress in the **Deployments** tab.
1. Once the build completes successfully, click the **Live App** link in the header and you should see your running application in a new tab, displaying the home page.

If you forked the repo and used your own copy when deploying the app, you can push changes to your fork and see App Platform automatically re-deploy the update to your app.
