import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import job from "./config/cron"
import { useSaveProperty } from "./routes/useSaveProperty";
import { useGetProperty } from "./routes/useGetProperty";
import { useAddTemplate } from "./routes/useAddTemplate";
dotenv.config();
const app = express();
app.use(cors({
  origin: ['https://property-dashboard-roan.vercel.app','http://localhost:3000'], 
}));
if(process.env.NODE_ENV == "production") job.start();
app.use(express.json());

app.use("/add",useSaveProperty)
app.use("/getall",useGetProperty)
app.use("/addtemplate",useAddTemplate)


app.listen(process.env.PORT || 8080,()=>console.log("server running on port",process.env.PORT))