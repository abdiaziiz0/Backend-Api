const mongoose = require("mongoose")
const MONGODB_URI = process.env.MONGODB_URI;


mongoose.connect(MONGODB_URI,);
mongoose.connection.on("open", () => console.log("Connected to database successfully"))
.once("Error", () => console.log("Failed to connect to database"))

module.exports = mongoose;