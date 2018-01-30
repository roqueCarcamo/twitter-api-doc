"use strict";

const express = require('express');
const router = express.Router();
const controller = require('./controller');

/*
 * /twitter/users/     GET    - READ ALL
 * /twitter/users/     POST   - CREATE
 * /twitter/users/:id  GET    - READ ONE
 * /twitter/users/:id  PUT    - UPDATE
 * /twitter/users/:id  DELETE - DELETE
 */

router.route('/')
    .get(controller.all)
    .post(controller.create);

router.param('id', controller.find);

router.route('/:id')
    .get(controller.get)
    .put(controller.update)
    .delete(controller.delete);

module.exports = router;