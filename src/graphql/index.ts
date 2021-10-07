import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import character from './schemas/character.graphql'
import game from './schemas/game.graphql'
import resolvers from './resolvers';
import { mergeSchemas } from 'apollo-server-express';

export const schema: GraphQLSchema = mergeSchemas({
    schemas: [
        character,
        game
    ],
    resolvers
})