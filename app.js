import express from "express";
import bodyParser from "body-parser";
import fs from 'fs';
import { scrappy } from "./src/scrappy.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  try {
    const result = await scrappy(req.query?.marca || "lenovo");
    fs.writeFileSync("dados.json", JSON.stringify({result}, null, 2))
    res.json(result);
    console.log("Resultados salvos em dados.json");
  } catch (error) {
    console.log("erro ao obter dados", error);
    res.status(500).json({ error: "erro ao obter dados" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
