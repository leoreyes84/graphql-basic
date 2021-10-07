import { IResolvers } from 'apollo-server-express';

export const game: IResolvers = {
    Query: {
        gameHello(){
            return "game works"
        }
    }
}