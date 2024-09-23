const express = require("express")
const app = express()

app.use(express.json())

// app.set('view engine', 'ejs')


app.post("/", (req,res) =>{
    console.log("here")
    res.send("login")
      
})

const userRouter = require("./routes/users")

app.use("/", userRouter)
app.listen (3000)  