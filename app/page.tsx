import { QueryBox } from '@/components/Landing/QueryBox'
import { HomePageStats } from '@/components/Landing/HomePageStats'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2 md:px-4">
      <h1 className="text-4xl text-blue-700">
        Road Status | <span className="font-medium text-red-700"> Nepal </span>
      </h1>
      <QueryBox />
      <HomePageStats />
    </div>
  )
}
