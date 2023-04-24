import { connect, getClient } from "./mongo.js";
import { v4 as uuidv4 } from "uuid";

async function findMany() {
  const client = getClient();
  const collection = client.db("assignments").collection("products");

  const products = await collection.find().toArray();
  return products;
}

async function findById(productId) {
  const client = getClient();
  const collection = client.db("assignments").collection("products");
  const product = await collection.findOne({ title: productId });
  console.log(product);
  return product;
}

async function insert(product) {
  const client = getClient();
  const collection = client.db("assignments").collection("products");
  const id = uuidv4();
  const productWithId = { ...product, _id: id };
  const saved = await collection.insertOne(productWithId);
  return saved;
}

export { findMany, findById, insert };
