const express = require("express")
const router = express.Router()
const users = require("../models/users");
const {addUser,getAllUsers} = require("../controllers/users");

router.post('/', addUser);
router.get('/', getAllUsers);


module.exports = router