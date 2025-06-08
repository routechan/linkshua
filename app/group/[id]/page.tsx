import { fetchLinkData } from "@/app/lib/group/group";
import AddLinkButton from "@/features/group/components/AddLinkButton";
import GroupTop from "@/features/group/components/GroupTop";
import LinkLists from "@/features/group/components/LinkList";
import { LinkData } from "@/features/group/types/types";

export default async function groupPage({params}:{params:{id:string}}){
    const groupId = params.id
    const linkData:LinkData | undefined | null = await fetchLinkData(groupId)
    if (!linkData) {
        return <div>グループが見つかりませんでした。</div>
      }
    return(
        <div className="relative">
            <GroupTop groupId={groupId} linkData={linkData}/>
            <AddLinkButton groupId={groupId}/>
            <LinkLists linkData={linkData}/>
        </div>
    )
}