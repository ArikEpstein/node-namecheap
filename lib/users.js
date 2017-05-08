'use strict';

const validate = require('./validation');

class Users {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    changePassword(oldpass, newpass) {
        if (validate.oldpass(oldpass) && validate.newpass(newpass)) {
            return this.command('users.changePassword', {OldPassword: oldpass, NewPassword: newpass});
        }
    }

    setPassword(resetCode, newpass) {
        if (validate.newpass(newpass) && validate.resetCode(resetCode)) {
            return this.command('users.changePassword', {ResetCode: code, NewPassword: newpass});
        }
    }

    create(username, password, email, params) {
        if (validate.username(username) && validate.password(password) && validate.addressParams(params) && validate.email(email)) {
            let options = {}, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.NewUserName = username;
            options.NewUserPassword = password;
            options.EmailAddress = email;
            options.AcceptTerms = 1;
            return this.command('users.create', options);
        }
    }

    createAddFundsRequest(amount, paymentType, url) {
        if (validate.amount(amount) && validate.paymentType(paymentType) && validate.url(url)) {
            return this.command('users.createAddFundsRequest', {
                Amount: amount,
                PaymentType: type,
                ReturnUrl: url
            });
        }
    }

    getAddFundsStatus(id) {
        if (!id) {
            throw new Error('You must include a token ID.');
        }
        return this.command('users.getAddFundsStatus', {TokenId: id});
    }

    getBalances() {
        return this.command('users.getBalances', {});
    }

    getPricing(type, code) {
        if (!type) {
            throw new Error('You must include a product type.');
        }
        let params = {};
        if ('[object Object]' == Object.prototype.toString.call(type)) {
            params.ProductType = Object.keys(type)[0];
            params.ProductCategory = type[params.ProductType];
        }
        else {
            params.ProductType = type;
            params.PromotionCode = code;
        }
        return this.command('users.getPricing', params);
    }

    login(password) {
        if (validate.password) {
            return this.command('users.login', {Password: password});
        }
    }

    resetPassword(findby, params) {
        if (!findby) {
            throw new Error('You must include a find by key and value.');
        }
        let options = {}, k;
        options.FindBy = Object.keys(findby)[0];
        options.FindByValue = findby[params.FindBy];
        for (k in params) {
            if (params.hasOwnProperty(k)) {
                options[k] = params[k];
            }
        }
        return this.command('users.resetPassword', options);
    }

    update(params) {
        if (validate.addressParams(params)) {
            return this.command('users.update', params);
        }
    }

}

module.exports = Users;