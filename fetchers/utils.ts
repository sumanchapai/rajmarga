// Utility functions to fetch data required for all pages.

import fs from 'fs'
import path from 'path'
import assert from 'assert'
import { DataFileSchema, Event } from '@/schema'
import { parse } from 'smol-toml'

const DATA_DIR = path.join(process.cwd(), '../data')

const regex = /data-\d{4}-(\d{2}).toml/
export function isValidFileName(name: string): boolean {
  // Expected format is "data-YYYY-MM.toml" (example: data-2024-10.toml)
  if (regex.test(name)) {
    const month = parseInt(regex.exec(name)![1])
    return month <= 12 && month > 0
  }
  return false
}

// Returns the list of all files located inside DATA_DIR
// Expects all files in DATA_DIR to be named properly
export function allDataFiles(): string[] {
  const files = fs.readdirSync(DATA_DIR)
  // Verify all files are named correctly
  files.forEach((fileName) => assert(isValidFileName(fileName)))
  return files
}

// Reads the contents of a given .toml datafile
// Expects the contents to be of format {"data": Event[]}
export function eventsInDataFile(fileName: string): Event[] {
  assert(isValidFileName(fileName))
  let result: Event[] = []
  try {
    const text = fs.readFileSync(fileName, 'utf8')
    const data = parse(text) // Might throw error
    result = DataFileSchema.parse(data).data // Might throw error
  } catch (err) {
    console.error('error reading file', fileName)
    console.error(err)
    throw err
  }
  return result
}
