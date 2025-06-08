import Link from "next/link"

const Header = () => {
  return (
   <header className="bg-blue py-4">
<Link href="/" className="text-white font-bold flex justify-center ">リンクシュア</Link>
   </header>
  )
}

export default Header