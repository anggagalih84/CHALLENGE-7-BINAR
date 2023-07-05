const express = require('express')
const UserGameController = require('../controller/user_game/user_game_controller_be')
const GameController = require('../controller/user_game/user_game_controller_fe')


const router = express.Router()

router.get('/', GameController.homePage) //masuk ke halaman utama
router.get('/game', GameController.halaman) // masuk ke halaman ke dua
router.get('/login', GameController.login)
router.get('/userbiodata', GameController.biodata)
router.get('/userhistory', GameController.history)
router.get('/create', GameController.create)
router.get('/update-user/:id', GameController.update)

router.post('/login', UserGameController.login)
router.get("/api", UserGameController.getAll)
router.post("/create-user", UserGameController.create)
router.post("/update-user/:id", UserGameController.update)
router.get("/delete-user/:id", UserGameController.delete)
router.get('/usergame', UserGameController.showUser)

module.exports = router