# 0x03-NODE_MYSQL
* This repository contains my simple demonstration of the REST API I built using NodeJS 
* and connected to MYSQL via properly configured Endpoints to carry out CRUD operations

## index.js 
* This is my application's starting point
* It uses express on port 3000 and connects to mysql instance i created with XAMPP
* An employee database was created using code, the employee table was also created and populated
* Endpoints were configured for select, insert, **update** and delete
* The update endpoint is faulty, I'm getting an error saying:
```ts
Error: ER_PARSE_ERROR: You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use 
near 'id = 1' at line 1
```
* Here's the syntax in question:
```SQL
"UPDATE employee SET name = 'Updated name' WHERE employee id = 1"
```
# Help is welcome!
# PS: every other endpoint works fine
### Language and Packages used:
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
