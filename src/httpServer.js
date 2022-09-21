import { createServer } from "http";
import { server } from "./server.js";

export const httpServer = createServer(server);
