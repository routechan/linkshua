import React, { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { deleteLink } from '@/app/actions/deleteLinkActions'
import Link from 'next/link'

type Props = {
  id: string
  isOpen: boolean
  closeModal: () => void
}

const EditModal = ({ id, isOpen, closeModal }: Props) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        e.stopPropagation()
        closeModal()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("touchstart", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [isOpen, closeModal])

  return (
    <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.2 }}
      className='absolute right-0 top-5 z-50'
    >
      <div
        ref={modalRef}
        className='bg-white rounded-lg shadow-md py-2 px-4 flex flex-col gap-1'
      >
        <Link href={`/group/${id}/link/edit`} className='text-xs text-gray-500'>
          編集
        </Link>
        <button onClick={() => deleteLink(id)} className='text-xs text-red-500'>
          削除
        </button>
      </div>
    </motion.div>
  )}
</AnimatePresence>
  )
}

export default EditModal
