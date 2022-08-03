import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'
import { createConnection } from 'typeorm'
import { schema } from './schema'
import { Users } from './entities/Users'

const main = async () =>{
    await createConnection({
        type:'mysql',
        database: 'graphqlcrud',
        username: 'root',
        password: '02082000',
        logging: true,
        synchronize: false,
        entities: [Users]
    })
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use('/api',graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () =>{
        console.log("listening on 3001")
    })
}
main().catch((err) =>{
    console.log(err)
})