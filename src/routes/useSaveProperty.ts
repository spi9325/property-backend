import { Request, Response, Router } from "express";
import z from "zod";
import { propertyTypes } from "../types/propertyTypes";
import { prisma } from "../prismaClient/client";

export const useSaveProperty = Router();

useSaveProperty.post("/property",async(req:Request,res:Response)=>{
    try {
        // const {propertyName,propertyPrice,propertyLocation,propertyInfo} = req.body;
        const validData = propertyTypes.safeParse(req.body);
        if(!validData.success || validData.error) return
        const result =await prisma.property.create({
            data:{
                name:validData.data?.propertyName,
                price:validData.data?.propertyPrice,
                location:validData.data?.propertyLocation,
                info:validData.data?.propertyInfo,
            }
        })

        if(result){
            res.status(200).json({result})
        }else{
            res.status(400).json({error:"error to add property"})
        }
    } catch (error) {
        console.log(error);
    }
})