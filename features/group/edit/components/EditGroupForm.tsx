"use client"
import Link from 'next/link';
import React, { useActionState, useState } from 'react'
import { LinkData } from '../../types/types';
import { editGroup } from '@/app/actions/editGroupActions';


const EditGroupForm = ({ linkData,groupId }: { linkData: LinkData,groupId:string }) => {
    const [groupName,setGroupName] = useState(linkData?.title)
    const [description,setDescription] = useState(linkData?.description || "")

    const initialState = null;
    const [state, formAction, isPending] = useActionState(
      async (_prevState:any, formData:any) => {
        return await editGroup(formData);
      },
      initialState
    );

  return (
    <>
    <h2 className='text-lg font-bold text-gray-500'>編集</h2>
    <form action={formAction}  className='mt-4 flex flex-col gap-4'>
     
     <div>
     <label htmlFor='group-name' className='text-gray-500'>リンク集の名前
     </label>
          <input
           maxLength={50}
           onChange={(e)=>setGroupName(e.target.value)}
           value={groupName}
            id='group-name'
            name='group-name'
            type='text'
            placeholder='ベトナム旅行用リンク集'
            className='w-full border border-gray-400  rounded-md p-2'
          />
           {state?.errors?.title && <p className="text-red-500">{state.errors.title[0]}</p>}
        </div>

        <div>
     <label htmlFor='description' className='text-gray-500'>説明</label>
     <textarea
            maxLength={140}
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            id='description'
            name='description'
            placeholder='ベトナム旅行で行きたい場所や役に立ちそうなサイトを集めてください'
            className='w-full border border-gray-400 rounded-md p-2'
          />
           {state?.errors?.description && <p className="text-red-500">{state.errors.description[0]}</p>}
        </div>

      <input name='groupId' type='hidden' value={groupId} />

      <button
        type='submit'
        className='w-full rounded-md bg-blue text-white py-2 disabled:opacity-50' 
        disabled={isPending  }
      >
         {isPending ? "変更中..." : "変更"}
      </button>

      <Link
        href={`/group/${groupId}`}
        className='w-full text-center bg-gray-200 text-gray-500 py-2 rounded-md'
      >
        戻る
      </Link>
    </form>
  </>
  )
}

export default EditGroupForm