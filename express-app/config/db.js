import { connect } from 'mongoose';

async function connectDB() {
    try {
        await connect('mongodb://127.0.0.1:27017/testDB');
        console.log("DB connected");
    } catch (error) {
        console.log("error:", error);
    }
}

export default connectDB;