Find coffee places in Des Moines.

## What is this?

This is a living proof-of-concept application for proving out the integration of google maps and React components.

## How the project is structured

* The server portion of the application lives in the lib directory
  * The server consists of a hapi 8.x server with a thin client to the google places REST api
  * Server-side views rendered with React
* The client-side portion lives in the client directory
  * This includes a more robust example of how to use my [idle-maps](https://github.com/zpratt/idle-maps) npm module.
  * It is built with webpack

## Usage

This project uses the es6 `Promise` class, therefore, you'll need to have either node 0.12.x or io.js installed to run the application.

  1. git clone ...
  2. `cp config/default.js config/localhost.js`
  3. edit config/localhost to include your google api key (needs to be a **server** key) and ip address of your server that you've whitelisted for your key
  4. `npm i`
  5. `npm start`
