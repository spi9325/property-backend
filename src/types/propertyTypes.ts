import z from "zod";


export const propertyTypes = z.object({
    propertyName:z.string().min(2,{message:"name must be 2"}),
    propertyPrice:z.number().min(3,{message:"min price 3 digits"}),
    propertyLocation:z.string().min(4,{message:"min char is 4"}),
    propertyInfo:z.string().min(4,{message:"information must 4 char"})
})