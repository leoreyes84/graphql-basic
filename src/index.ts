import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
app.use(cors())

const server = new ApolloServer({
    schema,
    introspection: true,
    playground: true
})

server.applyMiddleware({app})

app.listen(5000, () => {
    console.log(`http://localhost:5000`);
})