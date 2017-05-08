'use strict';

const validate = require('./validation');

class Ssl {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    activate(id, csr, type, email, params) {
        if (validate.certificateId(id) && validate.csr(csr) && validate.type(type) && validate.email(email) && validate.addressParams(params)) {
            let options = this.defaults, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.CertificateID = id;
            options.ApproverEmail = email;
            options.csr = csr;
            options.WebServerType = type;
            return this.command('ssl.activate', options, 'POST');
        }
    }

    create(type, years = 1, code) {
        if (validate.type(type)) {
            let params = {
                Type: type,
                Years: parseInt(years),
                PromotionCode: code ? code : null
            };
            return this.command('ssl.create', params);
        }
    }

    getApproverEmailList(domain, type) {
        if (validate.domain(domain) && validate.type(type)) {
            return this.command('ssl.getApproverEmailList', {
                DomainName: domain,
                CertificateType: type
            });
        }
    }

    getInfo(id) {
        if (validate.certificateId(id)) {
            return this.command('ssl.getInfo', {CertificateID: id});
        }
    }

    getList(params) {
        return this.command('ssl.getList', params);
    }

    parseCSR(csr, type) {
        if (validate.csr(csr) && validate.type(type)) {
            let params = {
                csr: csr,
                CertificateType: type
            };
            return this.command('ssl.parseCSR', params, 'POST');
        }
    }

    reissue(id, csr, type, email, params) {
        if (validate.certificateId(id) && validate.csr(csr) && validate.type(type) && validate.email(email)) {
            let options = this.defaults, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.CertificateID = id;
            options.ApproverEmail = email;
            options.csr = csr;
            options.WebServerType = type;
            return this.command('ssl.reissue', options, 'POST');
        }
    }

    renew(id, type, years = 1, code) {
        if (validate.certificateId(id) && validate.type(type)) {
            let params = {
                CertificateID: id,
                SSLType: type,
                Years: parseInt(years),
                PromotionCode: code ? code : null
            };
            return this.command('ssl.renew', params);
        }
    }

    resendApproverEmail(id) {
        if (validate.certificateId(id)) {
            return this.command('ssl.resendApproverEmail', {CertificateID: id});
        }
    }

    resendFulfillmentEmail(id) {
        if (validate.certificateId(id)) {
            return this.command('ssl.resendFulfillmentEmail', {CertificateID: id});
        }
    }

}

module.exports = Ssl;