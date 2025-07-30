import { Request, Response, Router } from "express";
import { prisma } from "../prismaClient/client";

export const useGetProperty = Router();

useGetProperty.get("/property",async(req:Request,res:Response)=>{
    try {
        const result =await prisma.property.findMany({select:{propertyName:true,propertyPrice:true,propertyLocation:true,propertyInfo:true}});

        if(result){
            res.status(200).json({result})
        }else{
            res.status(400).json({error:"error to getall property"})
        }
    } catch (error) {
        console.log(error);
    }
})