
import { Request, Response, Router } from "express";
import { prisma } from "../prismaClient/client";


export const useAddTemplate = Router();

useAddTemplate.post("/basicdata",async(req:Request,res:Response)=>{
    try {
        const { Name,Email,Age,Projects,Experience,Location,Role } = req.body;
        if(!Name || !Email || !Age || !Projects || !Experience || !Location || !Role) return
        await prisma.template.create({
            data:{
                Name,
                Email,
                Age,
                Projects,
                Experience,
                Location,
                Role
            }
        });
        res.status(200);
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/herodata",async(req:Request,res:Response)=>{
    try {
        const { Title,Tagline,Profile,Image } = req.body;
        if(!Title || !Tagline || !Profile || !Image) return
        await prisma.template.create({
            data:{
                Title,
                Tagline,
                Profile,
                Image,
            }
        });
        res.status(200);
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/aboutdata",async(req:Request,res:Response)=>{
    try {
        const { Bio,Social } = req.body;
        if(!Bio || !Social) return
        await prisma.template.create({
            data:{
                Bio,
                Social,
            }
        });
        res.status(200);
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/Servicedata",async(req:Request,res:Response)=>{
    try {
        const { Service,Description } = req.body;
        if(!Service || !Description) return
        await prisma.template.create({
            data:{
                Service,
                Description,
            }
        });
        res.status(200);
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/testimonialdata",async(req:Request,res:Response)=>{
    try {
        const { Client,Review } = req.body;
        if(!Client || !Review) return
        await prisma.template.create({
            data:{
                Client,
                Review,
            }
        });
        res.status(200);
    } catch (error) {
        console.log(error);
        
    }
})


