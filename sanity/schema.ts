import { type SchemaTypeDefinition } from 'sanity';

import { blockContent } from './schemaTypes/blockContent';
import { post } from './schemaTypes/post';
import { project } from './schemaTypes/project';
import { tag } from './schemaTypes/tag';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, blockContent, project],
};
