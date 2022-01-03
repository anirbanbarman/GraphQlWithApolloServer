import { ApolloServer, gql } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground, ApolloServerPluginDrainHttpServer, ApolloServerPluginLandingPageDisabled } from "apollo-server-core";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
// import { JWT_SECRET, MONGO_URL } from "./config.js";
import './model/Quotes.js'
import './model/User.js'

import resolvers from "./resolvers.js";
import typeDefs from "./schemaGql.js";
import dotenv from "dotenv";
import express from 'express';
import http from 'http';
import path from "path";
const __dirname=path.resolve()


const port= process.env.PORT || 4000

if (process.env.NODE_ENV !== "production") {
    dotenv.config()
}

const app = express();
const httpServer = http.createServer(app);




mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("database connected successfully")
})
mongoose.connection.on("error", (error) => {
    console.error("error connecting  to mongo", error)
})





const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const { authorization } = req.headers;
        if (authorization) {
            const { userId } = jwt.verify(authorization, process.env.JWT_SECRET)
            return { userId }
        }
    }, plugins: [
        ApolloServerPluginDrainHttpServer({ httpServer }),

    process.env.NODE_ENV !== "production" ? ApolloServerPluginLandingPageGraphQLPlayground() : ApolloServerPluginLandingPageDisabled
    
    ]
 });


 

 
 if( process.env.NODE_ENV == "production"){
    app.use(express.static('client/build'));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,"client","build",'index.html'));
    });
}
 

 

 

 await server.start();
 server.applyMiddleware({app,path:"/graphql"});
 httpServer.listen({port},()=>{
    console.log(`server ready at ${server.graphqlPath}`)

 });
// server.listen().then(({ url }) => {
//     console.log(`server ready at ${url}`)

// });