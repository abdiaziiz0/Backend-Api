const express = require('express')
const app = express()
const PORT = 2525
require ("dotenv").config()
require('./config/data-base')
const cors = require('cors')

const ProductRoute = require("./router/product.route");

app.use(cors())

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to your express abdi'
    })
})
app.use("/api/products", ProductRoute)


app.listen(PORT, () => {
    console.log('Server is running at port 2525')
});