import { prisma } from "@/general/prisma";
import { CreateStd } from "@/type/test";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
    const method = req.method;
   
    if(method === "POST") {
      const body : CreateStd = req.body ;
      const createdNewStudent = await prisma.test.create({ data : { name : body.name, address : body.address, age : body.age , email : body.email , } })
      return res.status(200).json( createdNewStudent )
      
    }
    else if(method=== "DELETE"){
      const body = req.body;
      await prisma.test.delete({ where :{id : body.id }})
    }
  res.status(200).json({ name: "Response Soe" });
}
