import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
        });
        console.log("MongoDB Connected Successfully! 🚀");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌", error);
        process.exit(1); //it will exit proccess on failure
    }
};

export default connectDB;
