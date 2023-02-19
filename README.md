# Book Search Engine - MERN

## Description
My challenge was emblematic of the fact that most modern websites are driven by two things: data and user demands. This shouldn't come as a surprise, as the ability to personalize user data is the cornerstone of real-world web development today. And as user demands evolve, applications need to be more performant.

I took a fully functioning Google Books API search engine built with a RESTful API, and refactored it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API. It was already set up to allow users to save book searches to the back end.

To fulfill the challenge, I needed to do the following:

Set up an Apollo Server to use GraphQL queries and mutations to fetch and modify data, replacing the existing RESTful API.

Modify the existing authentication middleware so that it works in the context of a GraphQL API.

Create an Apollo Provider so that requests can communicate with an Apollo Server.

Deploy the application to Heroku.

## Table of Contents
  1) [Technologies](#technologies-used)
  2) [Challenges](#challenges)
  3) [Future Implementations](#future-implementations)
  4) [User Story](#user-story)
  5) [Installation](#installation)
  6) [License](#license)

## Technologies
* [nodejs](https://nodejs.org/en/) - to run the server in the terminal
* [GraphQL](https://graphql.org/) - Transferring from REST API
* [Apollo](https://www.apollographql.com/docs/apollo-server/) - Server to run GraphQL
* [concurrently](https://www.npmjs.com/package/concurrently) - Allows multiple commands to be executed in scripts
* [bcrypt](https://www.npmjs.com/package/bcrypt) - Variable encryption
* [express](https://www.npmjs.com/package/express) - Node.js framework for handling original API's
* [react](https://reactjs.org/) - Javascript library for building UI's
* [JSONWebToken](https://jwt.io/) - Handling user data/authentication
* [boostrap](https://getbootstrap.com/) - UI Framework

## Challenges
* Migrating original API requests to go through GraphQL
* Applying Apollo Server in app.js
* Using Config Vars from Heroku correctly, including openssl legacy provider

## Future Implementation
* Social media - users can comment on another user's saved books
* More UI Options - more modern look

## User Story
```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Installation
* Clone directory to code editor of choice
* Use custom `$npm run develop` script to watch changes while working
* Use `$npm run build` to build the webpack

## License
MIT © Krenbot