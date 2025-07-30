import express from "express";
import dotenv from "dotenv"
import { useSaveProperty } from "./routes/useSaveProperty";
import { useGetProperty } from "./routes/useGetProperty";
dotenv.config();
const app = express()
app.use(express.json());

app.use("/add",useSaveProperty)
app.use("/getall",useGetProperty)


app.listen(process.env.PORT || 8080,()=>console.log("server running on port",process.env.PORT))