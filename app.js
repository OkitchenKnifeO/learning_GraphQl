const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://Andy_Domeh:wuvBtCSDACrXGfru@graphqlninja.kgnv7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
mongoose.connection.once('open',()=>{
    console.log('Connected to Database')
})

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
    
}))




app.listen(port, () => console.log(`Example app listening on port ${port}!`))