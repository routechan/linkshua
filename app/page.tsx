import Comparison from "@/features/top/components/Comparison";
import Scene from "@/features/top/components/Scene";
import StartButton from "@/features/top/components/StartButton";
import Usage from "@/features/top/components/Usage";

export default function Home() {
  return (
    <div>
      
      <div className="text-center">
        <h1 className="text-blue text-4xl font-bold">みんなでつくる<br/>リンク集</h1>
     </div>
     <p className=" text-gray-500 mt-5">友達と「行きたい場所」や「気になるサイト」を共有するとき、管理が大変じゃないですか？<br />
     このツールなら、リンクをまとめてカンタンに共有できます。</p>

     <StartButton/>

<Scene />
<Comparison/>
<Usage/>
<StartButton/>
    </div>
  );
}
