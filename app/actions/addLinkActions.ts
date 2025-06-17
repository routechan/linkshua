"use server"

import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma/prisma";
import { z } from "zod";

const linkSchema = z.object({
    url: z.string().url("有効なURLを入力してください").max(200,"200文字以内で入力してください"),
    name: z.string().min(1, "タイトルを入力してください").max(100,"100文字以内で入力してください"),
    memo: z.string().max(140,"140字以内で入力してください").optional(),
    groupId: z.string().min(1, "グループIDが不正です"),
  });


export async function addLink(formData:FormData){
   
    const raw = {
        url: formData.get("url"),
        name: formData.get("name"),
        memo: formData.get("memo"),
        groupId: formData.get("groupId"),
      };
    
      const parseResult = linkSchema.safeParse(raw);
    
      if (!parseResult.success) {
        const errors = parseResult.error.flatten().fieldErrors;
        return { message: "入力内容に誤りがあります", errors };
      }
    
      const { url, name, memo, groupId } = parseResult.data;
  

    try{
const response = await prisma.link.create({
    data:{
        url,
        name,
        memo,
        groupId
    }
})
    }catch(error){
        return
    }
    redirect(`/group/${groupId}`)
}