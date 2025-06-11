

const Usage = () => {
    const usages = [
        {id:1,title:"リンク集を作成",description:"リンク集のタイトルと必要であれば説明を入力してグループを作成しましょう。",image:"usage1.png"},
{id:2,title:"リンク集を追加",description:"共有したいサイトのリンクとタイトル、必要であればメモを入力してリンクを追加しましょう。",image:"usage2.png"},
{id:3,title:"リンク集をシェア",description:"URLをコピーしてLINE等で友達に共有、URLを知っている人だけリンク集の編集ができます。",image:"usage3.png"}
    ]
  return (
    <div className=" mt-10 ">
   <h2 className="text-2xl font-bold text-blue text-center">使い方</h2>
   <ul className='mt-5 flex flex-col gap-4'>
    {usages.map((usage)=>(

<li className='border border-gray-500 p-5 rounded-md'>
<h3 className=' font-semibold text-gray-500'>{usage.id}.{usage.title}</h3>
<img src={`/usage/${usage.image}`}/>
<p className='text-gray-500 text-sm mt-2'>{usage.description}</p>
</li>
    ))}
   
   </ul>
   </div>

  )
}

export default Usage