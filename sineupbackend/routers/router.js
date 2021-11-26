const express = require('express');
const router = express.Router();
const sineupTemplateCopy = require('../models/sineupmodels');
const bcrypt = require('bcrypt');

router.post('/sineup', async(req, res) => {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    
    const sineUpUser = new sineupTemplateCopy({
        fullName: req.body.fullName,
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
    });
    sineUpUser
        .save()
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json(error);
        });
});

module.exports = router;
