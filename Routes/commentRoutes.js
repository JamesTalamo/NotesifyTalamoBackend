const express = require('express')
const router = express.Router()
const commentController  = require('../Controller/commentController')

router.post('/add/:id', commentController.addComment)
router.get('/check/:id', commentController.checkComment)

module.exports = router