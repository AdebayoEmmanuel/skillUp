# 0x00-NODEJS
* This repository contains my simple demonstration of the REST API I built using NodeJS 
* Endpoints are properly configured to carry out CRUD operations

## httpserver
* Simple httpserver demonstration, configured to listen at port 8080
* It bears no relevance to the REST of the project, just a side attraction
* This httpserver finally got a use case today, I used it to coach someone who was having issues setting up a node http server :)

## Files and directories
1. Users.js:
    * A module containing the array of user object
2. ./routes/api/users.js:
    * Express router configured with proper endpoint for get, search, put, post and delete operationson the Users object
3. index.js 
    * This is my application's starting point
    * It uses express and communicates with the API via the endpoints configured in ./routes/api/users.js
    * It uses express on port 3000

### Language and Packages used:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
