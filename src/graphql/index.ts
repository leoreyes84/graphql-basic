import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import 'graphql-import-node'
import character from './schemas/character.graphql'
import game from './schemas/game.graphql'
import { mergeSchemas } from 'apollo-server-express';
import { characterResolver } from './resolvers/character'
import { gameResolver } from './resolvers/game';

export const schema: GraphQLSchema = mergeSchemas({
    schemas: [
        character,
        game
    ],
    resolvers: [
        characterResolver, 
        gameResolver
    ]
})