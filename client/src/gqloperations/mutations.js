
import { gql } from '@apollo/client';

export const SIGNUP_USER = gql`
mutation createUser($userNew:UserInput!){
    signupUser:signupUser(userNew:$userNew){
        firstName
    }
}

`

export const SIGNIN_USER = gql`
mutation signinUser($userSignin:UserSigninInput!){
    user:signinUser(userSignin:$userSignin){
     token
      
    }
  }
 
`

export const CREATE_QUOTE = gql`
 mutation createQuote($name:String!){
    quote:createQuote(name:$name)
  }
`

