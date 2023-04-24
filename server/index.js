import express from "express";
import cors from "cors";
import { connect, getClient } from "./database/mongo.js";
import { findById, findMany, insert } from "./database/ProductDAO.js";
const app = express();
const port = 3000;

async function startApp() {
  await connect();
  app.use(cors());
  app.get("/Products", async (req, res) => {
    try {
      const products = await findMany();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/Products/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const product = await findById(id);
      res.json(product);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  app.post("/Products/", async (req, res) => {
    try {
      const product = req.body;
      console.log(product);
      const savedResult = await insert(product);
      res.status(200).json({ message: "Product Inserted Success" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: err.message });
    }
  });
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

startApp().catch((err) => {
  console.error(err);
  process.exit(1);
});
