import AddLinkForm from "@/features/group/add/components/AddLinkForm";

export default async function addLinkPage({params}:{params:{id:string}}){
    const groupId = params.id
 
return(
    <div>
    <AddLinkForm groupId={groupId} />
    </div>
)
}