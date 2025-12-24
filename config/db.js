import mongoose from "mongoose";

const ConnectToDB = async () => {
    try {
        const mongoUrl = process.env.MONGO_URI
        await mongoose.connect(mongoUrl);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error.message}`, error);
    }
}

export default ConnectToDB;