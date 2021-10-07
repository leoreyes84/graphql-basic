import { IResolvers } from 'apollo-server-express';

export const characterResolver: IResolvers = {
    Query: {
        hello(){
            return "world"
        },
        getCharacters() {
            return [
                {
                    id: 1,
                    name: 'Link',
                    race: 'HYLIAN'
                },
                {
                    id: 2,
                    name: 'Zelda',
                    race: 'HYLIAN'
                }
            ]
        }
    }
}