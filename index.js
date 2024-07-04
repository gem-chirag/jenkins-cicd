const express = require("express")
const app = express()

app.get("/app", (req,res)=>{
		res.send("Hello World")
})

app.listen(8081, ()=>{
		console.log(`Server is running at port : http://localhost:8081`)
})
