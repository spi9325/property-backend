import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import job from "./config/cron"
import { useSaveProperty } from "./routes/useSaveProperty";
import { useGetProperty } from "./routes/useGetProperty";
import { useAddTemplate } from "./routes/useAddTemplate";
import { useData } from "./routes/useData";
dotenv.config();
const app = express();
app.use(cors({
  origin: ['https://property-dashboard-roan.vercel.app','http://localhost:3000','https://portfolio-template-five-puce.vercel.app'], 
}));
if(process.env.NODE_ENV == "production") job.start();
app.use(express.json());

app.use("/add",useSaveProperty)
app.use("/getall",useGetProperty)
app.use("/addtemplate",useAddTemplate)
app.use("/get",useData);


app.listen(process.env.PORT || 8080,()=>console.log("server running on port",process.env.PORT))