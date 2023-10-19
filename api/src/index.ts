import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import helmet from "helmet";
import {AuthRouter} from "./routes/AuthRouter";
// import {TaskRouter} from "./routes/TaskRouter";
import path from "path";

const app = express();

// Env (should throw error when unable to find env variables)
dotenv.config();
export const WEB_PORT = process.env.WEB_PORT!;
export const IS_PRODUCTION = process.env.NODE_ENV! == "production";
export const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING!;
export const JWT_TOKEN_SECRET = process.env.JWT_TOKEN_SECRET!;

// Config
app.use(bodyParser.json());
app.use(helmet());

if (!IS_PRODUCTION) {
  app.get("/", (req, res) => {
    res.send(
      "Currentlly running in development mode. If you see this in production, shut down the server immediately or report it to administrators!"
    );
  });
} else {
  // Safe to overwrite CSP as index.html's content can be trusted.
  app.use("/", (req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline';");
    next();
  });

  // Serve FE files
  app.use(express.static(path.join(__dirname, "../../frontend/build")));

  // TODO: Catch errors in production and return 500
}

// Routers
const v1_router_public = express.Router();
v1_router_public.use(AuthRouter);
app.use("/api/v1/public/", v1_router_public);

// todo: all of these routes should be behind auth (will do after hackathon) eq: v1_router_authed.use(authenticate_token);
const v1_router_authed = express.Router();
// v1_router_authed.use(TaskRouter);
app.use("/api/v1/", v1_router_authed);

// Start server
const server = app.listen(WEB_PORT, () => {
  if (IS_PRODUCTION) {
    console.log("[startup] Running in production mode!");
  } else {
    console.log(
      "[startup] Running in development mode. If you see this in production, change NODE_ENV environment variable to 'production'."
    );
  }

  console.log(`[startup] Server is running at http://localhost:${WEB_PORT}`);
});
