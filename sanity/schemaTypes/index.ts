import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { districtType } from './district'
import { provinceType } from './province'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, districtType, provinceType],
}
