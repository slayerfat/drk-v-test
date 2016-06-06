// ```
// server.conf.js
// (c) 2016 David Newman
// david.r.niciforovic@gmail.com
// server.conf.js may be freely distributed under the MIT license
// ```

// *server.conf.js*

//  This is the file where we will:
//  - Configure our application
//  - Connect to our database
//  - Create our Mongoose models
//  - Define routes for our RESTful API
//  - Define routes for our frontend Angular application
//  - Set the app to listen on a port so we can view it in our browser

// # Node Env Variables

// Load Node environment variable configuration file
import { validateEnvVariables } from "./config/env.conf.js";
import express from "express";
import socketio from "socket.io";
import http from "http";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import methodOverride from "method-override";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import base from "./sockets/base";
import mongooseConf from "./config/mongoose.conf.js";
import passportConf from "./config/passport.conf.js";
import routes from "./app/routes";

// Set up appropriate environment variables if necessary
validateEnvVariables();

// # Modules

// Load Express
// Load Socket.io
// Load Node http module
// Create our app with Express
let app = express();
// Create a Node server for our Express app
let server = http.createServer(app);
// Integrate Socket.io
let io = socketio.listen(server);
// Load Mongoose for MongoDB interactions
// Log requests to the console (Express 4)
// Pull information from HTML POST (express 4)
// Simulate DELETE and PUT (Express 4)
// PassportJS

// # Configuration

// Load Socket.io server functionality

base(io);

// Set the port for this app
let port = process.env.PORT || 8080;

// Load Mongoose config file for connecting to MongoDB instance

// Pass Mongoose configuration Mongoose instance
mongooseConf(mongoose);

// Import PassportJS configuration

// Pass Passport configuration our PassportJS instance
passportConf(passport);

if (process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'test')
// Log every request to the console
  app.use(morgan('dev'));

// Read cookies (needed for authentication)
app.use(cookieParser());

// ## Get all data/stuff of the body (POST) parameters

// Parse application/json
app.use(bodyParser.json());
// Parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));
// Set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/dist'));

// ## Passport JS

// Session secret
app.use(session({

  secret: process.env.SESSION_SECRET,

  resave: true,

  saveUninitialized: true
}));

app.use(passport.initialize());

// Persistent login sessions
app.use(passport.session());

// ## Routes

// Get an instance of the express Router
let router = express.Router();

// Load our application API routes
// Pass in our express and express router instances

// Pass in instances of the express app, router, and passport
routes(app, router, passport);

// ### Ignition Phase

server.listen(port);

// Shoutout to the user
console.log(`Wizardry is afoot on port ${port}`);

// Expose app
export { app };
