const express = require("express");
const mysql = require("mysql");
const cors = require("cors")
const app = express() 

app.use(express.json())
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "portfolio"

})


  
app.post("/", (req, res) => {
    const sentName = req.body.Name
    const sentMail = req.body.Email
    const sentMsg = req.body.Message


    const sql = `INSERT INTO contact (name, email, message)
    VALUES (?,?,?)`

    const Values = [sentName, sentMail, sentMsg]

    db.query(sql, Values ,(err, results)=>{
        if(err){
            res.send(err)
        }   
        else{
            console.log("Sent Successfully")
            res.send({message:"sent successfully"})
        }
    })
    // const sql = "select * from contact";
    // db.query(sql, (err, data) => {
    // if (err) return res.send("Error")
    // return res.send(data);
    //  })
});

app.listen(3002, () => {
    console.log("Listening...");
})

