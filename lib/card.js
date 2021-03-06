'use strict';

// The content of this file was automatically generated

var Promise    = require('promise');
var Base       = require('basejs');
var ProcessOut = require('./processout');
var Response   = require('./networking/response');
var Request    = require('./networking/request');

var Card = module.exports = Base.extend({
    _client: null,

    /**
     * ID of the card
     * @type {string}
     */
    _id: null,

    /**
     * Project to which the card belongs
     * @type {object}
     */
    _project: null,

    /**
     * Scheme of the card, such as visa or mastercard
     * @type {string}
     */
    _scheme: null,

    /**
     * Type of the card (Credit, Debit, ...)
     * @type {string}
     */
    _type: null,

    /**
     * Name of the bank of the card
     * @type {string}
     */
    _bankName: null,

    /**
     * Level of the card (Electron, Classic, Gold, ...)
     * @type {string}
     */
    _brand: null,

    /**
     * First 6 digits of the card
     * @type {string}
     */
    _iin: null,

    /**
     * Last 4 digits of the card
     * @type {string}
     */
    _last4Digits: null,

    /**
     * Expiry month
     * @type {integer}
     */
    _expMonth: null,

    /**
     * Expiry year, in a 4 digits format
     * @type {integer}
     */
    _expYear: null,

    /**
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @type {dictionary}
     */
    _metadata: null,

    /**
     * Define whether or not the card is in sandbox environment
     * @type {boolean}
     */
    _sandbox: null,

    /**
     * Date at which the card was created
     * @type {string}
     */
    _createdAt: null,

    /**
     * Card constructor
     * @param {ProcessOut} client
     * @param {array} prefill (optional)
     */
    constructor: function(client, prefill) {
        if (typeof client === 'undefined')
            throw new Error("The Card object must be instanciated with the ProcessOut client. You can create one using new ProcessOut('project-id', 'project-secret').newCard()");

        this._client = client;
        if (typeof prefill !== 'undefined')
            this.fillWithData(prefill);
    },

    /**
     * Get Id
     * ID of the card
     * @return {float}
     */
    getId: function() {
        return this._id;
    },

    /**
     * Set Id
     * ID of the card
     * @param {float} val
     * @return {Card}
     */
    setId: function(val) {
        this._id = val;
        return this;
    },

    /**
     * Get Project
     * Project to which the card belongs
     * @return {object}
     */
    getProject: function() {
        return this._project;
    },

    /**
     * Set Project
     * Project to which the card belongs
     * @param {object} val
     * @return {Card}
     */
    setProject: function(val) {
        if (typeof val === 'object')
            this._project = val;
        else {
            var obj = new Project(this._client);
            obj.fillWithData(val);
            this._project = obj;
        }
        return this;
    },

    /**
     * Get Scheme
     * Scheme of the card, such as visa or mastercard
     * @return {float}
     */
    getScheme: function() {
        return this._scheme;
    },

    /**
     * Set Scheme
     * Scheme of the card, such as visa or mastercard
     * @param {float} val
     * @return {Card}
     */
    setScheme: function(val) {
        this._scheme = val;
        return this;
    },

    /**
     * Get Type
     * Type of the card (Credit, Debit, ...)
     * @return {float}
     */
    getType: function() {
        return this._type;
    },

    /**
     * Set Type
     * Type of the card (Credit, Debit, ...)
     * @param {float} val
     * @return {Card}
     */
    setType: function(val) {
        this._type = val;
        return this;
    },

    /**
     * Get BankName
     * Name of the bank of the card
     * @return {float}
     */
    getBankName: function() {
        return this._bankName;
    },

    /**
     * Set BankName
     * Name of the bank of the card
     * @param {float} val
     * @return {Card}
     */
    setBankName: function(val) {
        this._bankName = val;
        return this;
    },

    /**
     * Get Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @return {float}
     */
    getBrand: function() {
        return this._brand;
    },

    /**
     * Set Brand
     * Level of the card (Electron, Classic, Gold, ...)
     * @param {float} val
     * @return {Card}
     */
    setBrand: function(val) {
        this._brand = val;
        return this;
    },

    /**
     * Get Iin
     * First 6 digits of the card
     * @return {float}
     */
    getIin: function() {
        return this._iin;
    },

    /**
     * Set Iin
     * First 6 digits of the card
     * @param {float} val
     * @return {Card}
     */
    setIin: function(val) {
        this._iin = val;
        return this;
    },

    /**
     * Get Last4Digits
     * Last 4 digits of the card
     * @return {float}
     */
    getLast4Digits: function() {
        return this._last4Digits;
    },

    /**
     * Set Last4Digits
     * Last 4 digits of the card
     * @param {float} val
     * @return {Card}
     */
    setLast4Digits: function(val) {
        this._last4Digits = val;
        return this;
    },

    /**
     * Get ExpMonth
     * Expiry month
     * @return {int}
     */
    getExpMonth: function() {
        return this._expMonth;
    },

    /**
     * Set ExpMonth
     * Expiry month
     * @param {int} val
     * @return {Card}
     */
    setExpMonth: function(val) {
        this._expMonth = val;
        return this;
    },

    /**
     * Get ExpYear
     * Expiry year, in a 4 digits format
     * @return {int}
     */
    getExpYear: function() {
        return this._expYear;
    },

    /**
     * Set ExpYear
     * Expiry year, in a 4 digits format
     * @param {int} val
     * @return {Card}
     */
    setExpYear: function(val) {
        this._expYear = val;
        return this;
    },

    /**
     * Get Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @return {object}
     */
    getMetadata: function() {
        return this._metadata;
    },

    /**
     * Set Metadata
     * Metadata related to the card, in the form of a dictionary (key-value pair)
     * @param {object} val
     * @return {Card}
     */
    setMetadata: function(val) {
        this._metadata = val;
        return this;
    },

    /**
     * Get Sandbox
     * Define whether or not the card is in sandbox environment
     * @return {bool}
     */
    getSandbox: function() {
        return this._sandbox;
    },

    /**
     * Set Sandbox
     * Define whether or not the card is in sandbox environment
     * @param {bool} val
     * @return {Card}
     */
    setSandbox: function(val) {
        this._sandbox = val;
        return this;
    },

    /**
     * Get CreatedAt
     * Date at which the card was created
     * @return {float}
     */
    getCreatedAt: function() {
        return this._createdAt;
    },

    /**
     * Set CreatedAt
     * Date at which the card was created
     * @param {float} val
     * @return {Card}
     */
    setCreatedAt: function(val) {
        this._createdAt = val;
        return this;
    },

    /**
     * Fills the current object with the new values pulled from the data
     * @param  {array} data
     * @return {Card}
     */
    fillWithData: function(data) {
        if (data["id"])
            this.setId(data["id"]);
        if (data["project"])
            this.setProject(data["project"]);
        if (data["scheme"])
            this.setScheme(data["scheme"]);
        if (data["type"])
            this.setType(data["type"]);
        if (data["bank_name"])
            this.setBankName(data["bank_name"]);
        if (data["brand"])
            this.setBrand(data["brand"]);
        if (data["iin"])
            this.setIin(data["iin"]);
        if (data["last_4_digits"])
            this.setLast4Digits(data["last_4_digits"]);
        if (data["exp_month"])
            this.setExpMonth(data["exp_month"]);
        if (data["exp_year"])
            this.setExpYear(data["exp_year"]);
        if (data["metadata"])
            this.setMetadata(data["metadata"]);
        if (data["sandbox"])
            this.setSandbox(data["sandbox"]);
        if (data["created_at"])
            this.setCreatedAt(data["created_at"]);
        return this;
    },

    
}, {});
