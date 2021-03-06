'use strict';

var Base = require('basejs');

var ProcessOutAuthenticationError = require('../errors/processoutauthenticationerror');
var ProcessOutNotFoundError       = require('../errors/processoutnotfounderror');
var ProcessOutValidationError     = require('../errors/processoutvalidationerror');
var ProcessOutInternalError       = require('../errors/processoutinternalerror');
var ProcessOutError               = require('../errors/processouterror');

var Response = module.exports = Base.extend({
    /**
     * Raw response (restler object)
     * @type {restler}
     */
    raw: null,

    /**
     * Status code of the response
     * @type {int}
     */
    statusCode: null,

    /**
     * Headers of the response
     * @type {Object}
     */
    headers: null,

    /**
     * Unserialized body of the response
     * @type {Object}
     */
    body: null,

    /**
     * Serialized body of the response (raw body)
     * @type {string}
     */
    rawBody: null,

    /**
     * Response constructor
     * @param  {object}  result The result returned by parsing the response
     * @param  {restler} resp Restler object
     */
    constructor: function(result, resp) {
        this.raw        = resp;
        this.statusCode = resp.statusCode;
        this.headers    = resp.headers;
        this.rawBody    = resp.raw;
        this.body       = result;
    },

    /**
     * Check if the response was successful
     * @return {Boolean}
     */
    isSuccess: function() {
        if( ! ('success' in this.body) || ! this.body['success'])
            return false;
        
        return true;
    },

    /**
     * Get the error message of the response
     * @return {string} error message
     */
    getMessage: function() {
        var message = '';
        if('message' in this.body)
            message = message + this.body['message'];

        return message;
    },

    /**
     * Check if the response was successful, and return an error if it wasn't
     * @return {Error} error message
     */
    check: function() {
        if(! this.isSuccess()) {
            switch(this.statusCode) {
                case 404:
                    throw new ProcessOutNotFoundError('The resource could not be found (404): ' +
                        this.getMessage());
                case 401:
                    throw new ProcessOutAuthenticationError('Your ProcessOut credentials could not be verified (401): ' +
                        this.getMessage());
                case 400:
                    throw new ProcessOutValidationError('Your request could not be processed (400): ' +
                        this.getMessage());
            }

            if (this.statusCode >= 500)
                throw new ProcessOutInternalError('ProcessOut returned an internal error (' +
                    this.statusCode + '): ' + this.getMessage());

            throw new ProcessOutError('ProcessOut returned an error (' +
                this.statusCode + '): ' + this.getMessage());
        }
    }
});