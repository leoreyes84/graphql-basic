import { IResolvers } from 'apollo-server-express';

export const gameResolver: IResolvers = {
    Query: {
        gameHello(){
            return "game works"
        }
    }
}