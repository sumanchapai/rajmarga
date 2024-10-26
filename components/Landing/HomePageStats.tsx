import { getAllEvents } from '@/fetchers'

export function HomePageStats() {
  const data = getAllEvents()
  // TODO:
  // Use this data somehow
  return (
    <div className="mt-4">
      <p className="font-bold">Status </p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
