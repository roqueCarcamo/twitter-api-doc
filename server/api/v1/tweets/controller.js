"use strict";

const logger = require("winston");

const Model = require('./model');

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
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
                res.json({message:"Id does not exist"});
            }
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
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
        .find()
        .sort({createdAt:-1})
        .skip(skip)
        .limit(limit)
        .populate('author')
        .then( docs => {
            res.json({
                twests: docs,
                limit,
                skip
            })
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
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
                message:"Successfully created tweet",
                content: doc})
        })
        .catch( err => {
            next(new Error(err));
        });
};

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.get = (req, res, next) => {
    logger.info(req.params.id);
    res.json(req.doc);
};

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.update = (req, res, next) => {
    logger.info(req.params.id);
    logger.info(req.body);
     
    let document = Object.assign(req.doc, req.body);
     
    document.save()
        .then(doc => {
             res.json({
                message:"Successfully modified tweet",
                content: doc});
         })
        .catch(err => {
           next(new Error(err));
         });
};

/**
 * @api {get} /tweets/:id Request Tweets information
 * @apiName GetTweets
 * @apiGroup Tweets
 *
 * @apiParam {String} id Tweets unique ID.
 *
 * @apiSuccess {String} _id         unique ID of the Tweets.
 * @apiSuccess {String} content     Content.
 * @apiSuccess {String} location    Location.
 * @apiSuccess {String} author      Author.
 * @apiSuccess {String} createdAt   Created date of the users.
 * @apiSuccess {String} updateAt    Last update date of the users.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *{
 *	"_id": "5a643b01cbd91d2618e310b2",
 *	"content": "Nuevo anuncio 1",
 *	"author": "5a641a7fe8bcb529ac475562",
 *	"location": "Barranquilla",
 *	"createdAt": "2018-01-21T07:02:25.133Z",
 *	"updatedAt": "2018-01-21T07:02:25.133Z",
 *	"__v": 0
 *},
 *
 * @apiError Document Not Found the id of the Tweets was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Document Not Found"
 *     }
 */
exports.delete = (req, res, next) => {
    logger.info(req.params.id);
    const doc = req.doc;
    
    doc.remove()
        .then( deleted => {
            res.json({
                message:"Successfully deleted tweet",
                content: deleted}
                );
        })
        .catch( err => {
            next(new Error(err));
        });
};