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
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} lastname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the Users.
 * @apiSuccess {String} updateAt    Last update date of the Users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *	"status": true,
 *	"_id": "5a6438a34b40da33202342b7",
 *	"firstname": "Luis",
 *	"lastname": "Mesa",
 *	"email": "mesaLuis@gmail.com",
 *	"createdAt": "2018-01-21T06:52:19.612Z",
 *	"updatedAt": "2018-01-21T06:52:19.612Z",
 *	"__v": 0
 * }
 *
 * @apiError Document Not Found the id of the Users was not found.
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
 * @api {get} /users Request Users information
 * @apiName  AllUsers
 * @apiGroup Users
 *
 * @apiSuccess users : Key Jsons
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *	"users": [{
 *		"status": true,
 *		"_id": "5a641a7fe8bcb529ac475562",
 *		"firstname": "Pedro",
 *		"lastname": "Luis",
 *		"email": "carcamomesa@gmail.com",
 *		"createdAt": "2018-01-21T04:43:43.634Z",
 *		"updatedAt": "2018-01-21T04:43:43.634Z",
 *		"__v": 0
 *	}],
 *	"limit": 10,
 *	"skip": 0
 * }
 * 
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

 /**
 * @api {post} /users Request Users information
 * @apiName  PostUsers
 * @apiGroup Users
 * 
 * @apiParam {String} firstname Firstname.
 * @apiParam {String} lastname  Lastname.
 * @apiParam {String} email     Email.
 * 
 *
 * @apiSuccess message : message
 * @apiSuccess content : Key Jsons
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"message": "Successfully created user",
 *	"content": {
 *		"status": true,
 *		"_id": "5a6438a34b40da33202342b7",
 *		"firstname": "Luis",
 *		"lastname": "Mesa",
 *		"email": "mesaLuis@gmail.com",
 *		"createdAt": "2018-01-21T06:52:19.612Z",
 *		"updatedAt": "2018-01-21T06:52:19.612Z",
 *		"__v": 0
 *	}
 *}
 * 
 *
 * @apiError Document Not Found the id of the Users was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
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
 * @apiName IdUsers
 * @apiGroup Users
 *
 * @apiParam {String} id Users unique ID.
 *
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} lastname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the Users.
 * @apiSuccess {String} updateAt    Last update date of the Users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 * {
 *	"status": true,
 *	"_id": "5a6438a34b40da33202342b7",
 *	"firstname": "Luis",
 *	"lastname": "Mesa",
 *	"email": "mesaLuis@gmail.com",
 *	"createdAt": "2018-01-21T06:52:19.612Z",
 *	"updatedAt": "2018-01-21T06:52:19.612Z",
 *	"__v": 0
 * }
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
 * @api {put} /users/:id Request Users information
 * @apiName  PutUsers
 * @apiGroup Users
 * 
 * @apiParam {String} id Unique ID of the Users.
 * @apiParam {String} firstname Firstname.
 * @apiParam {String} lastname  Lastname.
 * @apiParam {String} email     Email.
 * 
 *
 * @apiSuccess message : message
 * @apiSuccess content : Key Jsons
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"message": "Successfully modified user",
 *	"content": {
 *		"status": false,
 *		"_id": "5a6438a34b40da33202342b7",
 *		"firstname": "Marcos",
 *		"lastname": "Robles",
 *		"email": "roblesMarcos@gmail.com",
 *		"createdAt": "2018-01-21T06:52:19.612Z",
 *		"updatedAt": "2018-01-21T06:55:49.749Z",
 *		"__v": 0
 *	}
 *}
 * 
 *
 * @apiError Document Not Found the id of the Users was not found.
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
 * @api {delete} /users/:id Request Users information
 * @apiName  DeleteUsers
 * @apiGroup Users
 * 
 * @apiParam {String} id Users unique ID.
 * 
 *
 * @apiSuccess message : message
 * @apiSuccess users : Key Jsons
 * @apiSuccess {Boolean} status     Status of Users.
 * @apiSuccess {String} _id         Unique ID of the Users.
 * @apiSuccess {String} firstname   Firstname.
 * @apiSuccess {String} listname    Lastname.
 * @apiSuccess {String} email       Email.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"message": "User successfully disabled",
 *	"content": {
 *		"status": false,
 *		"_id": "5a6438a34b40da33202342b7",
 *		"firstname": "Luis",
 *		"lastname": "Mesa",
 *		"email": "mesaLuis@gmail.com",
 *		"createdAt": "2018-01-21T06:52:19.612Z",
 *		"updatedAt": "2018-01-21T06:54:05.502Z",
 *		"__v": 0
 *	}
 *}
 * 
 *
 * @apiError Document Not Found the id of the Users was not found.
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