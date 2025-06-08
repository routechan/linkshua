import Link from 'next/link'

const StartButton = () => {
  return (
    <Link href="/new" className="bg-blue text-white px-4 py-2 rounded-full inline-block mt-8 flex justify-center items-center">はじめる</Link>
  )
}

export default StartButton