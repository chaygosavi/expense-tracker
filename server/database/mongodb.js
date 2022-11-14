import mongoose from "mongoose";

const connect = async () => {
  await mongoose.connect(
    "mongodb+srv://chaygosavi:cMG9999@expense-tracker-bf.ycujlah.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("MongoDB connection  is succesfull");
};
export default connect;
