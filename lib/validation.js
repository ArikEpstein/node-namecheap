'use strict';

module.exports = {
    domain,
    hosts,
    nameServer,
    ip,
    oldIP,
    transferId,
    certificateId,
    csr,
    type,
    email,
    addressId,
    addressName,
    addressParams,
    username,
    password,
    oldpass,
    newpass,
    resetCode,
    params,
    aliases,
    epp,
    amount,
    paymentType,
    url
};

function domain(domain) {
    if (!domain) {
        throw new Error('You must include a domain name.');
    }
    return true;
}

function hosts(hosts) {
    if (!hosts) {
        throw new Error('You must include hosts.');
    }
    return true;
}

function nameServer(nameServer) {
    if (!nameServer) {
        throw new Error('You must include a nameserver.');
    }
    return true;
}

function ip(ip) {
    if (!ip) {
        throw new Error('You must include the new IP.');
    }
    return true;
}

function oldIP(oldIP) {
    if (!oldIP) {
        throw new Error('You must include the old IP.');
    }
    return true;
}

function transferId(id) {
    if (!id) {
        throw new Error('You must include a transfer ID.');
    }
    return true;
}

function epp(epp) {
    if (!epp) {
        throw new Error('You must include an EPP code.');
    }
    return true;
}

function certificateId(id) {
    if (!id) {
        throw new Error('You must include a certificate ID.');
    }
    return true;
}

function csr(csr) {
    if (!csr) {
        throw new Error('You must include a CSR.');
    }
    return true;
}

function type(type) {
    if (!type) {
        throw new Error('You must include a web server type.');
    }
    return true;
}

function email(email) {
    if (!email) {
        throw new Error('You must include an approver email.');
    }
    return true;
}

// function _checkAddressParams(params) {
//     if (!params.HTTPDCValidation){
//         throw new Error('You must include an approver email.');
//     }
//     return true;
// }

function addressId(id) {
    if (!id) {
        throw new Error('You must include an address id.');
    }
    return true;
}

function addressName(params) {
    if (!params) {
        throw new Error('You must include an address name.');
    }
    return true;
}

function addressParams(params) {
    if (!params) {
        throw new Error('You must include address parameters.');
    }
    return true;
}

function username(username) {
    if (!username) {
        throw new Error('You must include a username.');
    }
    return true;
}

function password(pass) {
    if (!pass) {
        throw new Error('You must include password.');
    }
    return true;
}

function params(params) {
    if (!params) {
        throw new Error('You must include parameters.');
    }
    return true;
}

function aliases(aliases) {
    if (!aliases) {
        throw new Error('You must include aliases.');
    }
    return true;
}


function oldpass(oldpass) {
    if (!oldpass) {
        throw new Error('You must include the old password.');
    }
    return true;
}

function newpass(newpass) {
    if (!newpass) {
        throw new Error('You must include a new password.');
    }
    return true;
}

function resetCode(resetCode) {
    if (!resetCode) {
        throw new Error('You must include the reset code.');
    }
    return true;
}

function amount(amount) {
    if (!amount) {
        throw new Error('You must include an amount.');
    }
    return true;
}

function paymentType(paymentType) {
    if (!paymentType) {
        throw new Error('You must include a paymentType.');
    }
    return true;
}

function url(url) {
    if (!url) {
        throw new Error('You must include a return URL.');
    }
    return true;
}