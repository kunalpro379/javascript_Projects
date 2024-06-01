import mongoose from "mongoose";
import colors from "colors";
let mango="mongodb+srv://kunaldp379:kunal@cluster0.snxbwxo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URL);
    const conn = await mongoose.connect(mango);

    console.log(
      `Connected To Mongodb Database ${mongoose.connection.host}`.bgMagenta
        .white
    );
  } catch (error) {
    console.log(`MongoDB Erorr ${error}`.bgRed.white);
  }
};

export default connectDB;