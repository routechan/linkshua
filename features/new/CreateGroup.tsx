"use client"
import { createGroup } from '@/app/actions/createGroupActions'
import { useActionState, useState } from 'react'

const CreateGroup = () => {
    const [groupName,setGroupName] = useState("")
    const [description,setDescription] = useState("")

    const initialState = null;
    const [state, formAction, isPending] = useActionState(
      async (_prevState:any, formData:any) => {
        return await createGroup(formData);
      },
      initialState
    );

  return (
    <div>
        <form action={formAction} className="flex flex-col gap-4">
        <div>
     <label htmlFor='group-name' className='text-gray-500'>リンク集の名前
     </label>
          <input
           maxLength={50}
           onChange={(e)=>setGroupName((e.target.value).trim())}
            id='group-name'
            name='group-name'
            value={groupName}
            type='text'
            placeholder='ベトナム旅行用リンク集'
            className='w-full border border-gray-400 text-gray-900 rounded-md p-2'
          />
           {state?.errors?.title && <p className="text-red-500">{state.errors.title[0]}</p>}
        </div>
        <div>
     <label htmlFor='description' className='text-gray-500'>説明</label>
     <textarea
            maxLength={140}
            onChange={(e)=>setDescription((e.target.value).trim())}
            value={description}
            id='description'
            name='description'
            placeholder='ベトナム旅行で行きたい場所や役に立ちそうなサイトを集めてください'
            className='w-full border border-gray-400 rounded-md p-2 text-gray-900'
          />
           {state?.errors?.description && <p className="text-red-500">{state.errors.description[0]}</p>}
        </div>
            <button disabled={isPending || !groupName} className={`${groupName ? "bg-blue" : "bg-gray-300"} text-white p-2 rounded-md `} type="submit" >{isPending ? "作成中..." : "リンク集を作成"}</button>
        </form>
    </div>
  )
}

export default CreateGroup