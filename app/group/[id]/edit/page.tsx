import { fetchLinkData } from "@/app/lib/group/group"
import EditGroupForm from "@/features/group/edit/components/EditGroupForm"
import { LinkData } from "@/features/group/types/types"

export default async function groupPage({params}:any){
    const groupId = params.id
    const linkData:LinkData | undefined |null = await fetchLinkData(groupId)
    if (!linkData) {
        return <div>グループが見つかりませんでした。</div>
      }
    return(
      <EditGroupForm linkData={linkData} groupId={groupId}/>
    )
}