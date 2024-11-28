import express from "express";
import connectDb from "./config/db";
// import productRouter from "./routes/post";
import dotenv from "dotenv"
dotenv.config()
const port = process.env.PORT
const app = express();
app.use(express.json());

app.use((req, res,next)=>{
    console.log("req", req.url)
    next()
})
// app.use("/", productRouter);
connectDb();
app.listen(port, () => {
  console.log("server is running on "+ port);
});