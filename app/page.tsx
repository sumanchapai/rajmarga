import { QueryBox } from '@/components/Landing/QueryBox'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto py-4 px-2 md:px-4">
      <h1 className="text-4xl text-blue-700">
        Road Status | <span className="font-medium text-red-700"> Nepal </span>
      </h1>
      <QueryBox />
      Home page stats is hidden from here. Checkout the{' '}
      <Link href="/test" className="underline">
        test
      </Link>{' '}
      route.
      {/* <HomePageStats /> */}
    </div>
  )
}
