const express = require('express')
const app = express()

const adder = require('./adder')

app.use(express.json())
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }))

app.get('/', (req, res)=>{
    const result = adder.add(1, 2)
    res.json({message:`${result}`})
})

app.listen(3000, ()=>{
    console.log('server start...')
})