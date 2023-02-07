const { gql } = require('apollo-server-express')

//TODO: Refactor typeDefs
const typeDefs = gql`




type Query {
    me: User
}

type Mutation{
    login :Accepts an email and password as parameters; returns an Auth type
    
    addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    
    saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
    
    removeBook: Accepts a book's bookId as a parameter; returns a User type.
}















`