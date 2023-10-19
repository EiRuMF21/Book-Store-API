const express = require('express')

    const app = express()
    const port = 2323

    const data_users = [
        { id: 1, name: "Iurie Muhamad", alamat: "Ujungberung" },
        { id: 2, name: "Arya Abdullah", alamat: "Cimahi" },
        { id: 3, name: "Aji Permana", alamat: "Kircon" },
        { id: 4, name: "Azka Dafin", alamat: "Antapani" },
    ];
    app.get("/users/:Rie", (req, res) => {
       
        let id = parseInt(req.params.id);

        let result;
        const user = data_users.find((user) => user.id === id);
        if (user) {
            result = {
            status: 200,
            data: user,
            };
        } else {
            res.status(404).json({ error: "User not found" });
        }
        res.json(result);
    });
    
    app.get("/users/:Rie", (req, res) => {
        let id = parseInt(req.params.id);

        
        let result;
        const user = data_users.find((user) => user.id === id);
        if (user) {
            result = {
            status: 200,
            data: user,
            };
        } else {
            res.status(404).json({ error: "User not found" });
        }
        res.json(result);
    });
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