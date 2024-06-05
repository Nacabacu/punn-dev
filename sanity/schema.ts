import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import tag from './schemaTypes/tag'
import post from './schemaTypes/post'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, blockContent],
}
