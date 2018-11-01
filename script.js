
const express = require("express")
const fs = require("fs");
const app = express()
const categories = require("./categories.json")
app.use(express.json())

app.get("/api/category/:id", (req, res) => {
    console.log('inside app.get')
    const requestedCategory = categories.find(category => category.id == req.params.id)
    console.log(requestedCategory)
    res.send(requestedCategory)
})

app.listen(3000, () => console.log("Hello"))