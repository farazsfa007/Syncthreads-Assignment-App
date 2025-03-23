import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected Successfully! 🚀");
    } catch (error) {
        console.error("MongoDB Connection Failed ❌", error);
        process.exit(1); // Exit process on failure
    }
};

export default connectDB;
