import express, { Express } from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import brandsRouter from "./routes/brands";
import sparePartsRouter from "./routes/spare_parts";

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    exposedHeaders: "total_count"
  })
);

app.use("/brands", brandsRouter);
app.use("/spare_parts", sparePartsRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
