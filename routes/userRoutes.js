const express = require('express')
const router = express.Router()

//import controller
const userController = require('../controllers/userController')

//get all the list of users
router.get('/', userController.get_user)

//create an user
router.post('/user', userController.create_user)

//update user
router.put('/update/:id', userController.update_user)

//delete user
router.delete('/delete/:id', userController.delete_user)

module.exports = router