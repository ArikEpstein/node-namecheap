'use strict';

const parser = require('xmlparser'),
    request = require('request-promise'),
    qs = require('querystring'),
    errorCodes = require('./errorCodesList'),
    util = require('util');

module.exports = function command(cmd, params, method) {
    const self = this;
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

    return request(options).then((body) => {
        let result = parser.parser(body),
            res = result.ApiResponse.CommandResponse;

        if (res && res.Type) {
            delete res.Type;
        }

        if (result.ApiResponse.Status === "ERROR") {
            let errorCode = result.ApiResponse.Errors.Error.Number;
            throw new Error(errorCodes[errorCode] || errorCodes[params.Command][errorCode]);
        }

        return res ? res[Object.keys(res)[0]] : null;
    });
};