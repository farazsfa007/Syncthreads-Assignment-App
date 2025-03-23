import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN)
        console.log('MongoDb Connected Successfully👍')
    } catch (error) {
        console.log(error)
    }
}

export default connectDB