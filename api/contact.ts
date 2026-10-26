import express from "express";
import contactRouter from "../server/contact.js";

// Vercel discovers files under /api as serverless functions.
// Reuse the existing Express contact handler without starting a listener.
const app = express();
app.use(contactRouter);

export default app;
