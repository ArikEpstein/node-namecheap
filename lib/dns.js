'use strict';

const validate = require('./validation'),
    util = require('util');

class Dns {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    getEmailForwarding(domain) {
        if (validate.domain(domain)) {
            return this.command('domains.dns.getEmailForwarding', {DomainName: domain});
        }
    }

    getHosts(domain) {
        if (validate.domain(domain)) {
            domain = domain.split('.');
            return this.command('domains.dns.getHosts', {
                SLD: domain.shift(),
                TLD: domain.join('.')
            });
        }
    }

    getList(domain) {
        if (validate.domain(domain)) {
            domain = domain.split('.');
            return this.command('domains.dns.getList', {
                SLD: domain.shift(),
                TLD: domain.join('.')
            });
        }
    }

    setCustom(domain, nameservers) {
        if (validate.domain(domain) && validate.nameServer(nameservers)) {
            domain = domain.split('.');
            nameservers = util.isArray(nameservers) ? nameservers.join() : nameservers;
            return this.command('domains.dns.setCustom', {
                SLD: domain.shift(),
                TLD: domain.join('.'),
                Nameservers: nameservers
            });
        }
    }

    setDefault(domain) {
        if (validate.domain(domain)) {
            domain = domain.split('.');
            return this.command('domains.dns.setDefault', {
                SLD: domain.shift(),
                TLD: domain.join('.')
            });
        }
    }

    setEmailForwarding(domain, aliases) {
        if (validate.domain(domain) && validate.aliases(aliases)) {
            let params = {DomainName: domain}, k, i = 1;
            for (k in aliases) {
                if (aliases.hasOwnProperty(k)) {
                    params['MailBox' + i] = k;
                    params['ForwardTo' + i] = aliases[k];
                    i++;
                }
            }
            return this.command('domains.dns.setEmailForwarding', params);
        }
    }

    setHosts(domain, hosts, type) {
        if (validate.domain(domain) && validate.hosts(hosts)) {
            domain = domain.split('.');
            let params = {SLD: domain.shift(), TLD: domain.join('.')}, i = 0, k, l = hosts.length;
            for (; i < l; i++)
                for (k in hosts[i])
                    if (hosts[i].hasOwnProperty(k))
                        params[k + (1 + i)] = hosts[i][k];
            if (type) {
                params.EmailType = type;
            }
            return this.command('domains.dns.setHosts', params);
        }
    }
}

module.exports = Dns;
