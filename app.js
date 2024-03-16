import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { scrappy } from "./src/scrappy.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    const result = await scrappy(req.query?.marca || "lenovo");
    res.send(result);
  } catch (error) {
    console.log("erro ao obter dados", error);
    res.status(500).json({ error: "erro ao obter dados" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
