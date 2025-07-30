import { Request, Response, Router } from "express";
import z from "zod";
import { propertyTypes } from "../types/propertyTypes";
import { prisma } from "../prismaClient/client";

export const useSaveProperty = Router();

useSaveProperty.post("/property",async(req:Request,res:Response)=>{
    try {
        const validData = propertyTypes.safeParse(req.body);

        if(!validData.success) return
        const result =await prisma.property.create({
            data:{
                propertyName:validData.data?.propertyName,
                propertyPrice:validData.data?.propertyPrice,
                propertyLocation:validData.data?.propertyLocation,
                propertyInfo:validData.data?.propertyInfo,
            }
        })

        if(result){
            res.status(200).json({success:"ok"})
        }else{
            res.status(400).json({error:"error to add property"})
        }
    } catch (error) {
        console.log(error);
    }
})