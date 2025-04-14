import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cablesRouter from "./routes/cables.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/cables", cablesRouter);

app.get("/", (req, res) => {
  res.send("Communication Infra API is running.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
