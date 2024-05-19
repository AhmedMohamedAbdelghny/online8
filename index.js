import express from 'express'
import postRouter from "./src/modules/posts/post.routes.js"
import connection from './db/connectionDB.js'
import cors from "cors"
const app = express()
const port = process.env.port || 3000




app.use(cors())
app.use(express.json())
app.use("/posts", postRouter)
connection


app.get("/", (req, res) => {
    res.status(200).json({
        message: "hello on my project"
    })
})

app.use("*", (req, res) => {
    res.status(404).json({
        message: "page not found"
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))