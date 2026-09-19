import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import route from "./router/route.js";

const app = express();

app.use(cors());
app.use(express.json());
 
app.use("/api", route);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});