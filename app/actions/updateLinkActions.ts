"use server"
import { z } from "zod";
import { prisma } from "../lib/prisma/prisma";
import { redirect } from "next/navigation";

const linkSchema = z.object({
    url: z.string().url("有効なURLを入力してください").max(200,"200文字以内で入力してください"),
    name: z.string().min(1, "タイトルを入力してください").max(100,"100文字以内で入力してください"),
    memo: z.string().max(140,"140字以内で入力してください").optional(),
    linkId: z.string().min(1, "リンクIDが不正です"),
  });

export async function updateLink(formData:FormData){
    const raw = {
        url: formData.get("url"),
        name: formData.get("name"),
        memo: formData.get("memo"),
        linkId: formData.get("linkId"),
      };
    
      const parseResult = linkSchema.safeParse(raw);
    
      if (!parseResult.success) {
        const errors = parseResult.error.flatten().fieldErrors;
        return { message: "入力内容に誤りがあります", errors };
      }
    
      const { url, name, memo, linkId} = parseResult.data;
  
      let response
try{
     response = await prisma.link.update({
        where:{id:linkId},
        data:{
            url,
            name,
            memo,
           
        }
    })

}catch(error){
    console.error(error);
    return
}
redirect(`/group/${response.groupId}`)
}