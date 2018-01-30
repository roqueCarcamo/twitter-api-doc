"use strict";

const express = require('express');
const router = express.Router();
const controller = require('./controller');

/*
 * /twitter/twests/     GET    - READ ALL
 * /twitter/twests/     POST   - CREATE
 * /twitter/twests/:id  GET    - READ ONE
 * /twitter/twests/:id  PUT    - UPDATE
 * /twitter/twests/:id  DELETE - DELETE
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