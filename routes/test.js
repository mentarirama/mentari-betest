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
        const testCreate = await testPost.save() //method mongodb
        res.json(testCreate)
    } catch (err) {
        res.json({message: err}) 
    }
})

// READ 
router.get('/', async (req, res) => {
    try {
        const testRead = await user.find() //method mongodb
        res.json(testRead) 
    } catch (err) {
        res.json({message: err})
        
    }
})

// UPDATE
router.put('/:userId', async (req, res) => {
    try {
        const testUpdate = await user.updateOne({_id: req.params.userId}, {
            id: req.body.id,
            userName: req.body.userName,
            accountNumber: req.body.accountNumber,
            emailAddress: req.body.emailAddress,
            identityNumber: req.body.identityNumber
        })
        res.json(testUpdate)
    } catch (err) {
        res.json({message: err})
        
    }
})

// DELETE
router.delete('/:userId', async (req, res) => {
    try {
        const testUpdate = await user.deleteOne({_id: req.params.userId})
        res.json(testUpdate)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router
