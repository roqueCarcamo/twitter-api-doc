"use strict";

const logger = require("winston");

const Model = require('./model');

/**
 * @api {get} /users/:id Request Users information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5a63985872e840361145d634",
 *          "title": "Go girl",
 *          "description": "Originally writed by Gillian Flynn",
 *          "author": {
 *              "_id": "5a63929672e840361145d633",
 *              "firstname": "Gustavo",
 *              "lastname": "Morales",
 *              "createdAt": "2018-01-20T19:03:50.638Z",
 *              "updatedAt": "2018-01-20T19:03:50.638Z",
 *              "__v": 0
 *          },
 *          "createdAt": "2018-01-20T19:28:24.046Z",
 *          "updatedAt": "2018-01-20T19:28:24.046Z",
 *          "__v": 0
 *      },
 *
 * @apiError Document Not Found the id of the Book was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.find = (req, res, next, id) => {
    logger.info(id);
    Model.findById(id)
        .then( doc => {
            if(doc){
                req.doc = doc;
                next();
            }else{
                res.status(404);
                res.json({message:"Id does not exist"})
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};


/**
 * @api {get} /users/:id Request Users information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5a63985872e840361145d634",
 *          "title": "Go girl",
 *          "description": "Originally writed by Gillian Flynn",
 *          "author": {
 *              "_id": "5a63929672e840361145d633",
 *              "firstname": "Gustavo",
 *              "lastname": "Morales",
 *              "createdAt": "2018-01-20T19:03:50.638Z",
 *              "updatedAt": "2018-01-20T19:03:50.638Z",
 *              "__v": 0
 *          },
 *          "createdAt": "2018-01-20T19:28:24.046Z",
 *          "updatedAt": "2018-01-20T19:28:24.046Z",
 *          "__v": 0
 *      },
 *
 * @apiError Document Not Found the id of the Users was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.all = (req, res, next) => {
    logger.info(req.query.limit);
    logger.info(req.query.skip);
    const limit = Number(req.query.limit) || 10;
    const skip = Number(req.query.skip) || 0;
    Model
        .find({status:true})
        .skip(skip)
        .limit(limit)
        .then( docs => {
            res.json({
                users: docs,
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

exports.create = (req, res, next) => {
    logger.info(req.body);
    const body = req.body;
    
    let document = new Model(body);
    document.save()
        .then( doc => {
            res.json({
                message:"Successfully created user",
                content: doc})
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {get} /users/:id Request Users information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5a63985872e840361145d634",
 *          "title": "Go girl",
 *          "description": "Originally writed by Gillian Flynn",
 *          "author": {
 *              "_id": "5a63929672e840361145d633",
 *              "firstname": "Gustavo",
 *              "lastname": "Morales",
 *              "createdAt": "2018-01-20T19:03:50.638Z",
 *              "updatedAt": "2018-01-20T19:03:50.638Z",
 *              "__v": 0
 *          },
 *          "createdAt": "2018-01-20T19:28:24.046Z",
 *          "updatedAt": "2018-01-20T19:28:24.046Z",
 *          "__v": 0
 *      },
 *
 * @apiError Document Not Found the id of the Users was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.get = (req, res, next) => {
    res.json(req.doc);
};

/**
 * @api {get} /users/:id Request Users information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5a63985872e840361145d634",
 *          "title": "Go girl",
 *          "description": "Originally writed by Gillian Flynn",
 *          "author": {
 *              "_id": "5a63929672e840361145d633",
 *              "firstname": "Gustavo",
 *              "lastname": "Morales",
 *              "createdAt": "2018-01-20T19:03:50.638Z",
 *              "updatedAt": "2018-01-20T19:03:50.638Z",
 *              "__v": 0
 *          },
 *          "createdAt": "2018-01-20T19:28:24.046Z",
 *          "updatedAt": "2018-01-20T19:28:24.046Z",
 *          "__v": 0
 *      },
 *
 * @apiError Document Not Found the id of the Book was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.update = (req, res, next) => {
    logger.info(req.doc);
    logger.info(req.body);
    let document = Object.assign(req.doc, req.body);
     
    document.save()
        .then(doc => {
             res.json({
                 message:"Successfully modified user",
                 content: doc});
         })
        .catch(err => {
           next(new Error(err));
         });
};

/**
 * @api {get} /users/:id Request Users information
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "_id": "5a63985872e840361145d634",
 *          "title": "Go girl",
 *          "description": "Originally writed by Gillian Flynn",
 *          "author": {
 *              "_id": "5a63929672e840361145d633",
 *              "firstname": "Gustavo",
 *              "lastname": "Morales",
 *              "createdAt": "2018-01-20T19:03:50.638Z",
 *              "updatedAt": "2018-01-20T19:03:50.638Z",
 *              "__v": 0
 *          },
 *          "createdAt": "2018-01-20T19:28:24.046Z",
 *          "updatedAt": "2018-01-20T19:28:24.046Z",
 *          "__v": 0
 *      },
 *
 * @apiError Document Not Found the id of the Book was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.delete = (req, res, next) => {
    logger.info(req.doc);
    let document = req.doc;
    
    document.status = false;
    document.save()
        .then(doc => {
             res.json({
                 message:"User successfully disabled",
                 content: doc});
         })
        .catch(err => {
           next(new Error(err));
         });
};