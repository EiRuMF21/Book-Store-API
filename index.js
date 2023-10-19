const express = require('express')

    const app = express()
    const port = 2323
    
    app.get('/Kopi latte',(req,res) =>{
        res.json("Ini kopi latte ")
    })
    app.post('/Kopi Mochacino',(req,res) =>{
        res.json("Ini kopi Mochacino ")
    })
    app.put('/Kopi Espresso',(req,res) =>{
        res.json("Ini Kopi Espresso")
    })
    app.delete('/Kopi longblack',(req,res) =>{
        res.json("Ini Kopi longblack")
    })


    app.listen(port,() => console.log(`Server running on port ${port}`))