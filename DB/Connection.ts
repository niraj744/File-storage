"use server";

import { connect } from "mongoose";

let cache = false;
const Connections = async () => {
  if (!process.env.MONGODB_URL) return console.log("NOT AVAILABE MONGODB URL");
  if (cache) return;
  await connect(process.env.MONGODB_URL);
  cache = true;
  console.log("connected");
};

export default Connections;
