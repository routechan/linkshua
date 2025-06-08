import { fetchLink } from "@/app/lib/group/group";
import EditLinkForm from "@/features/group/link/components/EditLinkForm";


export default async function linkEditPage({params}:{params:{id:string}}){
  const id = params.id
  const link = await fetchLink(id)
  if(!link){
return <div>リンクが見つかりませんでした。</div>
  }
    return(
       <EditLinkForm link={link} id={id}/>
    )
}