'use strict';

/**
 * Description:
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */

function notFoundHandler (request, response, next) {
    response.status(404).send('Not Found');
}

module.exports = notFoundHandler;