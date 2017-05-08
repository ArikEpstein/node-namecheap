'use strict';

const validate = require('./validation');

class Transfer {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    create(domain, epp, years = 1, code) {
        if (validate.domain(domain) && validate.epp(epp)) {
            let params = {
                DomainName: domain,
                EPPCode: epp,
                Years: parseInt(years),
                PromotionCode: code ? code : null
            };
            return this.command('domains.transfer.create', params);
        }
    }

    getList(params) {
        return this.command('domains.transfer.getList', params);
    }

    getStatus(id) {
        if (validate.transferId) {
            return this.command('domains.transfer.getStatus', {TransferID: id});
        }
    }

    updateStatus(id, resubmit) {
        if (validate.transferId) {
            return this.command('domains.transfer.updateStatus', {
                TransferID: id,
                Resubmit: resubmit
            });
        }
    }
}

module.exports = Transfer;