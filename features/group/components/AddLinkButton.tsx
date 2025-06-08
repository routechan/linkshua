import Link from "next/link"

type Props = {
  groupId:string
}

const AddLinkButton = ({groupId}:Props) => {
  return (
    <div className="flex justify-center mt-7">
    <Link href={`/group/${groupId}/add`} className="border-2 border-blue w-full py-2 rounded-sm text-blue text-center">リンクを追加
</Link>

    </div>
  )
}

export default AddLinkButton