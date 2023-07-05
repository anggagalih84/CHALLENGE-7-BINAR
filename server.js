require('dotenv').config();
const express = require('express')
const app = express()
const model = require('./models')
const fs = require('fs')
const UserGameController = require('./controller/user_game/user_game_controller_be')
    // const UserGameController = require('./controller/user_game/user_game_controller_fe')
const route = require("./routers/index.js")
const port = 3010

app.set('view engine', 'ejs') //memanggil ejs
app.use(express.static('public')) //memanggil folder file (public)
    // app.set('views', './views') //set view ejs 
const usersRead = fs.readFileSync('./public/data/user.json');
const users = JSON.parse(usersRead);

app.use(express.urlencoded({ extended: false }));
app.use(express.json()) // membaca json

app.use('/', route)



// app.post('/login', (req, res) => {
//     console.log("succes", req.body)
//     const username = req.body.username
//     const pass = req.body.password

//     const userGet = users.find(userGet => userGet.username === username && userGet.password === pass)
//     if (userGet) {
//         res.status(200).json({ message: "Login Berhasil, Have Fun!" });
//     } else {
//         res.status(401).json({ message: "Login Gagal, yuk bisa yuk" });

//     }

// })




app.listen(3010, () => { //running dashboard
    console.log('Dashboard running at http://localhost:3010')
});