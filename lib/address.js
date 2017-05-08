'use strict';

const validate = require('./validation');

class Address {

    constructor(command, defaults) {
        this.command = command;
        this.defaults = defaults;
    }

    create(name, params, def) {
        if (validate.addressName(name) && validate.addressParams(params)) {
            let options = {}, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.AddressName = name;
            options.DefaultYN = def ? 1 : 0;
            return this.command('users.address.create', options);
        }
    }

    deleteAddress(id) {
        if (validate.addressId(id)) {
            return this.command('users.address.delete', {AddressId: id});
        }
    }

    getInfo(id) {
        if (validate.addressId(id)) {
            return this.command('users.address.getInfo', {AddressId: id});
        }
    }

    getList() {
        return this.command('users.address.getList', {});
    }

    setDefault(id) {
        if (validate.addressId(id)) {
            return this.command('users.address.setDefault', {AddressId: id});
        }
    }

    update(id, name, params, def) {
        if (validate.addressId(id) && validate.addressName(name) && validate.addressParams(params)) {
            let options = {}, k;
            for (k in params) {
                if (params.hasOwnProperty(k)) {
                    options[k] = params[k];
                }
            }
            options.AddressId = id;
            options.AddressName = name;
            options.DefaultYN = def ? 1 : 0;
            return this.command('users.address.update', options);
        }
    }
}

module.exports = Address;
