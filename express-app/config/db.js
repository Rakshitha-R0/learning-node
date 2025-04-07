import { connect } from "mongoose";

const ConnectDB = async() => {
  try {
    await connect("mongodb://127.0.0.1:27017/testDB");
    console.log("DB connected");
  } catch (error) {
    console.log("error:", error);
  }
}

export default ConnectDB;
