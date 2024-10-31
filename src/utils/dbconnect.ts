import mongoose from "mongoose";
import log from "../logger/index.ts";

const connect = async () => {
  try {
    await mongoose.connect(Deno.env.get("MONGO_URI")!);
    log.info("Database Connected");
  } catch (err) {
    log.info(err);
    Deno.exit(1);
  }
  if (!Deno.env.get("MONGO_URI")) {
    log.error("MONGO_URI environment variable is not set");
    Deno.exit(1);
  }
};

export default connect;
