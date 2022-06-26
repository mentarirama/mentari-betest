const express = require('express')
const router = express.Router()
const user  = require('../models/user')

// router.get('/', (req, res) => {
//     res.send('This is an example ROUTES')
// })

// CREATE
router.post('/', async (req, res) => {
    const testPost = new user({
        id: req.body.id,
        userName: req.body.userName,
        accountNumber: req.body.accountNumber,
        emailAddress: req.body.emailAddress,
        identityNumber: req.body. identityNumber
    })

    try {
        const test = await testPost.save()
        res.json(test)
    } catch (err) {
        res.json({message: err}) 
    }
})

module.exports = router
