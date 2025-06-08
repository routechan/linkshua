import React from 'react'
import LinkItem from './LinkItem'
import { LinkData } from '../types/types'

const LinkLists = ({ linkData }: { linkData: LinkData }) => {
   
  return (
    <div className='mt-7 flex flex-col gap-1'>
      <ul>
        {
linkData.links.map((datum,index)=>(
    <LinkItem key={datum.id}  datum={datum} id={datum.id} index={index}/>
))
        }
        </ul>
    </div>
  )
}

export default LinkLists