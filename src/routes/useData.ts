
import { Request, Response, Router } from "express";
import { prisma } from "../prismaClient/client";


export const useData = Router();

 useData.post("/basicdata",async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        const allBasicDetails = await prisma.basicData.findFirst({
            where:{
                Email
            },
        });
        res.status(200).json({allBasicDetails});
    } catch (error) {
        console.log(error)
    }
})
 useData.post("/herodata",async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        const allHeroDetails = await prisma.heroData.findFirst({
            where:{
                Email
            },
        });
        res.status(200).json({allHeroDetails});
    } catch (error) {
        console.log(error)
    }
})
 useData.post("/servicedata",async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        const allServiceDetails = await prisma.service.findMany({
            where:{
                Email
            },
        });
        res.status(200).json({allServiceDetails});
    } catch (error) {
        console.log(error)
    }
})
 useData.post("/testimonialdata",async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        const allTestimonialDetails = await prisma.testimonial.findMany({
            where:{
                Email
            },
        });
        res.status(200).json({allTestimonialDetails});
    } catch (error) {
        console.log(error);
    }
})
 useData.post("/skilldata",async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        const allSkillDetails = await prisma.skill.findMany({
            where:{
                Email
            },
        });
        res.status(200).json({allSkillDetails});
    } catch (error) {
        console.log(error);
    }
})

