'use strict';

const validate = require('./validation'),
    util = require('util');

class Domains {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    check(DomainList) {
        DomainList = util.isArray(DomainList) ? DomainList : [DomainList];
        return this.command('domains.check', {DomainList: DomainList});
    }

    create(domain, years = 1, params) {
        if (validate.domain(domain)) {
            let options = this.defaults, k, y = parseInt(years);
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.DomainName = domain;
            options.Years = years;
            return this.command('domains.create', options);
        }
    }

    getContacts(domain) {
        if (validate.domain(domain)) {
            return this.command('domains.getContacts', {DomainName: domain});
        }
    }

    getInfo(domain) {
        if (validate.domain(domain)) {
            return this.command('domains.getInfo', {DomainName: domain});
        }
    }

//params: {CurrentPage:pageNum,PageSize:pageSize}
    getList(params) {
        return this.command('domains.getList', params);
    }

    getRegistrarLock(domain) {
        if (validate.domain(domain)) {
            return this.command('domains.getRegistrarLock', {DomainName: domain});
        }
    }

    getTldList() {
        return this.command('domains.getTldList', {});
    }

    reactivate(domain) {
        if (validate.domain(domain)) {
            return this.command('domains.reactivate', {DomainName: domain});
        }
    }

    renew(domain, years = 1, code) {
        if (validate.domain(domain)) {
            let params = {
                DomainName: domain,
                Years: parseInt(years),
                PromotionCode: code ? code : null
            };
            return this.command('domains.renew', params);
        }
    }

    setContacts(domain, params) {
        if (validate.domain(domain)) {
            let options = this.defaults, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.DomainName = domain;
            return this.command('domains.setContacts', options);
        }
    }

    setRegistrarLock(domain, lock = true) {
        if (validate.domain(domain)) {
            return this.command('domains.setRegistrarLock', {
                DomainName: domain,
                LockAction: lock ? 'LOCK' : 'UNLOCK'
            });
        }
    }

}

module.exports = Domains;


// Domains.prototype.check,
//     create,
//     getContacts,
//     getInfo,
//     getList,
//     getRegistrarLock,
//     getTldList,
//     reactivate,
//     renew,
//     setContacts,
//     setRegistrarLock