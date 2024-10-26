import { z } from 'zod'

const HighwaySchema = z.object({
  id: z.number(),
  name: z.string(),
  nameNepali: z.string(),
})

const ProvinceSchema = z.object({
  id: z.number(),
  name: z.string(),
  nameNepali: z.string(),
})

const DistrictSchema = z.object({
  id: z.number(),
  name: z.string(),
  nameNepali: z.string(),
  provinceId: z.number(), // Province ID reference
})

const LatitudeSchema = z.number()
const LongitudeSchema = z.number()

const StatusSchema = z.object({
  time: z.date(), // Date for timestamp
  condition: z.string(),
  conditionNep: z.string(),
  code: z.enum(['CLOSED', 'ONE_WAY', 'OPEN']),
})

const EventSchema = z.object({
  id: z.number(),
  locationLong: LongitudeSchema,
  locationLat: LatitudeSchema,
  location: z.string(),
  locationNep: z.string().optional(),
  districtId: z.number(), // District ID reference
  highwayIds: z.array(z.number()), // Array of Highway IDs
  status: z.array(StatusSchema),
})

export const DataFileSchema = z.object({
  data: z.array(EventSchema),
})

// Define TypeScript types from the Zod schemas if needed
type Highway = z.infer<typeof HighwaySchema>
type Province = z.infer<typeof ProvinceSchema>
type District = z.infer<typeof DistrictSchema>
type Status = z.infer<typeof StatusSchema>
export type Event = z.infer<typeof EventSchema>
