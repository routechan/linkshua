"use server"
import { redirect } from "next/navigation";
import { prisma } from "../lib/prisma/prisma";
import { z } from "zod";

const groupSchema = z.object({
    title:z.string().min(1, "リンク集の名前を入力してください").max(50,"50文字以内で入力してください"),
    description:z.string().max(140,"140次以内で入力してください").optional(),
    groupId:z.string().min(1,"グループIDが不正です")
})

export async function editGroup(formData:FormData){
    
    const raw = {
    title : formData.get("group-name") as string | null,
    description : formData.get("description") as string | null,
    groupId : formData.get("groupId") as string | null,
    }
  
    const parseResult = groupSchema.safeParse(raw);
    
      if (!parseResult.success) {
        const errors = parseResult.error.flatten().fieldErrors;
        return { message: "入力内容に誤りがあります", errors };
      }
    
      const { title, description, groupId } = parseResult.data;

try{
    const response = await prisma.linkGroup.update({
        where:{id:groupId},
        data:{
title,
description
        }
    })

}catch(error){
    console.error(error);
    return
}
redirect(`/group/${groupId}`)
}