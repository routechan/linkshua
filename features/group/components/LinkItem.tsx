"use client"

import { useSortable } from "@dnd-kit/react/sortable"
import {RestrictToVerticalAxis} from '@dnd-kit/abstract/modifiers';
import EditButton from "./EditButton";
import EditModal from "./EditModal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {  LinkType } from "../types/types";

type Props = {
  datum:LinkType,
  id:string,
  index:number
}

const LinkItem = ({datum,id,index}:Props) => {
  const router = useRouter();
  const [isOpen,setIsOpen] = useState(false)
  const openModal = (e:React.MouseEvent) =>{
    e.stopPropagation();
    e.preventDefault();
    setIsOpen(true)
  }
  const closeModal = ()=>{
    setIsOpen(false)
  }
  const handleClick = (e:React.MouseEvent)=>{
    if (!isOpen) {
      router.push(datum.url);
    }
  }


  const {ref,handleRef} = useSortable({
    id,
    index,
    modifiers:[RestrictToVerticalAxis]
})

  return (
    <div onClick={handleClick} ref={ref} className={`rounded-md py-2 flex justify-between bg-white relative cursor-pointer`}>
        <div className=" flex items-start gap-2">
        <button ref={handleRef}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 lucide lucide-grip-vertical-icon lucide-grip-vertical"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg></button>
        <div>
<h3 className="text-sm break-words break-all flex items-start text-gray-900"><img src={`https://www.google.com/s2/favicons?domain=${new URL(datum.url).hostname}`} alt="favicon" className="w-5 h-5 inline-block mr-1"/>{datum?.name}</h3>
<div className='text-xs text-gray-500 break-all'>{datum?.url}</div>
<div className="text-xs mt-1 break-words">{datum?.memo}</div>
</div>
</div>

<EditButton openModal={openModal}/>
<EditModal id={id} isOpen={isOpen}  closeModal={closeModal}/>
    </div>
  )
}

export default LinkItem