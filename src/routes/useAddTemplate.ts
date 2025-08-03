
import { Request, Response, Router } from "express";
import { prisma } from "../prismaClient/client";


export const useAddTemplate = Router();

useAddTemplate.post("/basicdata",async(req:Request,res:Response)=>{
    try {
        const { Name,Email,Age,Projects,Experience,Location,Role } = req.body;
        if(!Name || !Email || !Age || !Projects || !Experience || !Location || !Role) return
        const alredyExist = await prisma.heroData.findFirst({
            where:{
                Email
            }
        })
        if(alredyExist) return res.json({error:"alredy exist"})
        await prisma.basicData.create({
            data:{
                Name,
                Email,
                Age:Age.toString(),
                Projects:Projects.toString(),
                Experience:Experience.toString(),
                Location,
                Role
            }
        });
        res.status(200).json({sucess:"ok"});
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/herodata",async(req:Request,res:Response)=>{
    try {
        const { Email,Title,Tagline,Profile,Image } = req.body;
        
        if(!Email || !Title || !Tagline || !Profile || !Image) return
            
        await prisma.heroData.upsert({
            where: {
                Email
            },
            update:{
                Title ,
                Tagline,
                Profile,
                Image,
            },
            create:{
                Title ,
                Tagline,
                Profile,
                Image,
                Email 
            }
        });
        res.status(200).json({sucess:"ok"});
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/aboutdata",async(req:Request,res:Response)=>{
    try {
        const { Email,Bio,Social } = req.body;
        if(!Email || !Bio || !Social) return
        await prisma.about.upsert({
           where:{
            Email
           },
           update:{
            Bio,
            Social
           },
           create:{
            Bio,
            Social,
            Email
           }
        });
        res.status(200).json({sucess:"ok"});
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/servicedata",async(req:Request,res:Response)=>{
    try {
        const { Email,Service,Description } = req.body;
        if(!Email || !Service || !Description) return
        await prisma.service.create({
           data:{
            Service,
            Description,
            Email
           }
        });
        res.status(200).json({sucess:"ok"});
    } catch (error) {
        console.log(error);
        
    }
})
useAddTemplate.post("/testimonialdata",async(req:Request,res:Response)=>{
    try {
        const { Email,Client,Review } = req.body;
        if(!Email || !Client || !Review) return
        await prisma.testimonial.create({
            data:{
                Client,
                Review,
                Email
            }
        });
        res.status(200).json({sucess:"ok"});
    } catch (error) {
        console.log(error);
    }
})



