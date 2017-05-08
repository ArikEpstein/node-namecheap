'use strict';

const parser = require('xmlparser'),
    request = require('request-promise'),
    promise = require('bluebird'),
    qs = require('querystring'),
    util = require('util');

module.exports = function command(cmd, params, method) {
    const self = this;
    return new Promise((resolve, reject) => {
        params.ApiUser = self.api_user;
        params.ApiKey = self.api_key;
        params.UserName = self.username;
        params.Command = 'namecheap.' + cmd;
        params.ClientIp = self.client_ip;

        let options = {
            method: method || 'GET',
            uri: self.endpoint
        };

        params = qs.stringify(params);
        /*if (method == 'POST')
         options.body = params;
         else*/
        options.uri += '?' + params;

        return request(options)
            .then((body) => {
                let result = parser.parser(body),
                    err = result.ApiResponse.Errors.Error,
                    res = result.ApiResponse.CommandResponse;

                err = err ? {code: err.Number, message: err.$t} : undefined;

                if (res && res.Type) {
                    delete res.Type;
                }
                return resolve(err, res ? res[Object.keys(res)[0]] : null);
            })
            .catch((err) => {
                return reject(err);
            });
    });
};