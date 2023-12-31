import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import kenRoutes from "./routes/dalle.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/ken", kenRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: " Hello from CHI" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
