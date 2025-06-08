"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "../lib/prisma/prisma"
import { redirect } from "next/navigation"
import { z } from "zod";

const groupSchema = z.object({
    title:z.string().min(1, "リンク集の名前を入力してください").max(50,"50文字以内で入力してください"),
    description:z.string().max(140,"140次以内で入力してください").optional(),
})

export async function createGroup(formData: FormData){
    let groupId;
    const raw = {
        title : formData.get("group-name") as string | null,
        description : formData.get("description") as string | null,
        }
        const parseResult = groupSchema.safeParse(raw);
    
        if (!parseResult.success) {
          const errors = parseResult.error.flatten().fieldErrors;
          return { message: "入力内容に誤りがあります", errors };
        }
      
        const { title, description, } = parseResult.data;

    try{
  const group = await prisma.linkGroup.create({
            data: {
                title,
                description: description || undefined
            }
        })
    revalidatePath("/")
    groupId = group.id
    }
    catch(error){
        console.error(error)
        return
    }
    redirect(`/group/${groupId}`)
}