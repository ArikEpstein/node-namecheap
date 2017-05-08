'use strict';

const validate = require('./validation');

class Ns {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    create(domain, nameserver, ip) {
        if (validate.domain(domain) && validate.nameServer(nameserver) && validate.ip(ip)) {
            domain = domain.split('.');
            return this.command('domains.ns.create', {
                SLD: domain.shift(),
                TLD: domain.join('.'),
                Nameserver: nameserver,
                IP: ip
            });
        }
    }

    deleteDomain(domain, nameserver) {
        if (validate.domain(domain) && validate.nameServer(nameserver)) {
            domain = domain.split('.');
            return this.command('domains.ns.delete', {
                SLD: domain.shift(),
                TLD: domain.join('.'),
                Nameserver: nameserver
            });
        }
    }

    getInfo(domain, nameserver) {
        if (validate.domain(domain) && validate.nameServer(nameserver)) {
            domain = domain.split('.');
            return this.command('domains.ns.getInfo', {
                SLD: domain.shift(),
                TLD: domain.join('.'),
                Nameserver: nameserver
            });
        }
    }

    update(domain, nameserver, oldIP, ip) {
        if (validate.domain(domain) && validate.nameServer(nameserver) && validate.ip(ip) && validate.oldIP(oldIP)) {
            domain = domain.split('.');
            return this.command('domains.ns.update', {
                SLD: domain.shift(),
                TLD: domain.join('.'),
                Nameserver: nameserver,
                OldIP: old,
                IP: ip
            });
        }
    }
}

module.exports = Ns;
