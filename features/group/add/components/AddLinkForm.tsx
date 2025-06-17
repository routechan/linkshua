"use client";
import { addLink } from '@/app/actions/addLinkActions';
import Link from 'next/link';
import { useActionState, useEffect, useState } from 'react';



  
type Props = {
  groupId: string;
};

const AddLinkForm = ({ groupId }: Props) => {
  const [url, setUrl] = useState<string>("");
  const [name,setName] = useState("")
  const [memo,setMemo] = useState("")
  const [previewTitle, setPreviewTitle] = useState<string>("");

  useEffect(() => {
    if (!url) return;

    const timeout = setTimeout(() => {
      const fetchUrlTitle = async () => {
        try {
          const res = await fetch('/api/fetch-preview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url }),
          });
          const data = await res.json();
          if (data.title) setPreviewTitle(data.title);
        } catch (error) {
        }
      };
      fetchUrlTitle();
    }, 100);

    return () => clearTimeout(timeout);
  }, [url]);

  const initialState = null;
  const [state, formAction, isPending] = useActionState(
    async (_prevState:any, formData:any) => {
      return await addLink(formData);
    },
    initialState
  );

  return (
    <>
      <h2 className='text-lg font-bold text-gray-500'>新しいリンクを追加</h2>
      <form action={formAction} className='mt-4 flex flex-col gap-4'>
        <div>
          <label htmlFor='url' className='text-gray-500'>URL</label>
          <input
           maxLength={200}
            onChange={(e) => setUrl((e.target.value).trimStart())}
            id='url'
            name='url'
            type='text'
            value={url}
            placeholder='https://example.com'
            className='w-full border border-gray-400  rounded-md p-2 text-gray-900'
          />
  {state?.errors?.url && <p className="text-red-500">{state.errors.url[0]}</p>}


        </div>

        <div>
          <label htmlFor='name' className='text-gray-500'>タイトル</label>
          <input
            
            onChange={(e)=>{setName((e.target.value).trimStart() );setPreviewTitle("")}}
            id='name'
            name='name'
            value={name || previewTitle}
            type='text'
            placeholder='参考記事'
            className='w-full border border-gray-400 rounded-md p-2 text-gray-900'
          />
          {state?.errors?.name && <p className="text-red-500">{state.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor='memo' className='text-gray-500'>メモ（任意）</label>
          <textarea
            maxLength={140}
            onChange={(e)=>setMemo((e.target.value).trimStart())}
            value={memo}
            id='memo'
            name='memo'
            placeholder='このURLに関する説明などを記入'
            className='w-full border border-gray-400 rounded-md p-2 text-gray-900'
          />
        </div>

        <input name='groupId' type='hidden' value={groupId} />

        <button
  className={`bg-blue w-full rounded-md text-white py-2 disabled:opacity-50`}
  
>
          {isPending ? "送信中..." : "リンクを追加"}
        </button>

        <Link
          href={`/group/${groupId}`}
          className='w-full text-center bg-gray-200 text-gray-500 py-2 rounded-md'
        >
          戻る
        </Link>
      </form>
    </>
  );
};

export default AddLinkForm;
