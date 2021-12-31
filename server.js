import { ApolloServer,gql } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import  jwt  from "jsonwebtoken";
import  mongoose  from "mongoose";
import { JWT_SECRET, MONGO_URL } from "./config.js";
import './model/Quotes.js'
import './model/User.js'

import resolvers from "./resolvers.js";
import typeDefs from "./schemaGql.js";



mongoose.connect(MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on("connected",()=>{
    console.log("database connected successfully")
})
mongoose.connection.on("error",(error)=>{
    console.error("error connecting  to mongo",error)
})





 const server =new ApolloServer({
     typeDefs,
     resolvers,
     context:({req})=>{
        const { authorization } = req.headers;
        if(authorization){
         const {userId} = jwt.verify(authorization,JWT_SECRET)
         return {userId}
        }
    },plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
 });

 server.listen().then(({url})=>{
     console.log(`server ready at ${url}`)

 });