const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
//routers
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const conversationRouter = require("./routes/conversations");
const messageRouter = require("./routes/messages");

app.listen(7000, () => {
  console.log("backend server is running!");
});

app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/conversations", conversationRouter);
app.use("/api/messages", messageRouter);

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection is successfull!"))
  .catch((err) => console.log(err));
