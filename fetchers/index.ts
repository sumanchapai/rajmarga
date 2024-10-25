import { Event } from '@/schema'
import { allDataFiles, eventsInDataFile } from './utils'

function getAllEvents(): Event[] {
  // Read all the data files
  const dataFiles = allDataFiles()
  const eventsFromEachDataFile = dataFiles.map(eventsInDataFile)
  return eventsFromEachDataFile.flat() as Event[]
}
