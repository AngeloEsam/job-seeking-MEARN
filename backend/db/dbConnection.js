import mongoose from "mongoose";
export const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Connected to database 😁");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });
};
