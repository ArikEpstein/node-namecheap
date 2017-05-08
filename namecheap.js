'use strict';

const validate = require('./lib/validation'),
    Domains = require('./lib/domains'),
    Ssl = require('./lib/ssl'),
    Ns = require('./lib/ns'),
    Users = require('./lib/users'),
    Address = require('./lib/address'),
    Transfer = require('./lib/transfer'),
    Dns = require('./lib/dns'),
    command = require('./lib/command'),
    util = require('util');

class Namecheap {
    constructor(api_user, api_key, client_ip, sandbox) {
        this.api_user = this.username = api_user;
        this.api_key = api_key;
        this.client_ip = client_ip;
        this.endpoint = 'https://api.' + (sandbox ? 'sandbox.' : '') + 'namecheap.com/xml.response';
        this.defaults = {};
        this.command = command.bind(this);

        this.domains = new Domains(this.command, this.defaults);
        this.ns = new Ns(this.command, this.defaults);
        this.users = new Users(this.command, this.defaults);
        this.dns = new Dns(this.command, this.defaults);
        this.ssl = new Ssl(this.command, this.defaults);
        this.address = new Address(this.command, this.defaults);
        this.transfer = new Transfer(this.command, this.defaults);
    }

    setDefaults(params) {
        if (validate.params) {
            this.defaults = params;
            return this;
        }
    }

    setUsername(username) {
        if (validate.username(username)) {
            this.username = username;
            return this;
        }
    }
}

module.exports = Namecheap;