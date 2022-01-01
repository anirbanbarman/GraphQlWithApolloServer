import { gql } from "@apollo/client";

export const GET_ALL_QUOTES = gql`
query getAllQuotes{
    quotes{
        name
        by{
        firstName
          _id
          
        }
      }
}

`

export const GET_MY_PROFILE=gql`
query getMyProfile{
    myprofile{
        firstName
        lastName
         email 
         quotes{name}
    }
}
`

export const GET_USER_BY_ID=gql`
query getUser($userid:ID!){
    user(_id:$userid){
      email
      firstName
      lastName
      _id
      quotes{
          name
      }
    
      
    }
  }

`