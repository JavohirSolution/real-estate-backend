import { connect } from "mongoose";

const connectDb = async () => {
  connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to MongoDB."))
    .catch((error) => console.log(error));
};

export default connectDb;
