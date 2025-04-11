import { connect } from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const ConnectDB = async() => {
  try {
    await connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("error:", error);
  }
}
 
export default ConnectDB;
