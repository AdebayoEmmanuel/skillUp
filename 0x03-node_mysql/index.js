const express = require('express');
const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
});

//connect to mysql server
db.connect(err => {
    if(err)
    {
        throw err;
    }
    console.log("Mysql server connected")
})

const app = express();

//crerate db
app.get("/createdb", (req, res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err=>{
        if(err)
        {
            throw err;
        }
        res.send('Database created')
    }))
})

app.listen('3000', ()=> {
    console.log('server listening on port 3000')
})

//create table
app.get('/createemployee', (req, res)=> {
    let sql = 'CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY (id))'
    db.query(sql, err=>{
        if(err)
        {
            throw err
        }
        res.send('Employee table created successfully')
    })
})

//insert employee
app.get('/employee1', (req, res)=>{
    let post = {name: 'Jake Smith', designation: 'Chief Executive Officer'}
    let sql = 'INSERT INTO employee SET ?'
    let query = db.query(sql, post,err=>{
        if(err)
        {
            throw err
        }
        res.send('Employee added successfully')
    })
})

//select employee
app.get('/getemployee', (req, res)=>{
    let sql = 'SELECT * FROM employee'
    let query = db.query(sql,(err,result)=>{
        if(err)
        {
            throw err
        }
        console.log(result)
        res.send('Employee details fetched')
    })
})

//update employee

/*app.get('/updateemployee/:id', (req, res)=>{
    let newName = 'Updated name'
    let sql = `UPDATE employee SET name = '${newName}' WHERE employee id = ${req.params.id}`
    let query = db.query(sql,err=>{
        if(err)
        {
            throw err
        }
        res.send('Employee updated')
    })
})*/

//delete employee
app.get('/deleteemployee/:id', (req, res)=>{
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
    let query = db.query(sql,err=>{
        if(err){
            throw err
        }
        res.send('Employee deleted')
    })
})