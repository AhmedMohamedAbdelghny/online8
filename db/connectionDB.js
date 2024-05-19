import mysql from "mysql2"

const connection = mysql.createConnection("mysql://uz75t5lgxibadn5o:PlFQOxgFuUNJxfYIvsWB@bwlndzlecwzsapv5gpjf-mysql.services.clever-cloud.com:3306/bwlndzlecwzsapv5gpjf")

connection.connect((err) => {
    if (err) {
        console.log({ msg: "db failed to connected", err })
    } else {
        console.log("Connected to database")
    }
})

export default connection