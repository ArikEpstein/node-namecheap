'use strict';

/*
// https://www.namecheap.com/support/api/error-codes.aspx
 */

module.exports = {
    1010101: "Parameter APIUser is missing",
    1030408: "Unsupported authentication type",
    1010104: "Parameter Command is missing",
    1010102: "Parameter APIKey is missing",
    1011102: "Parameter APIKey is missing",
    1010105: "Parameter ClientIP is missing",
    1011105: "Parameter ClientIP is missing",
    1050900: "Unknown error when validating APIuser",
    1011150: "Parameter RequestIP is invalid",
    1017150: "Parameter RequestIP is disabled or locked",
    1017105: "Parameter ClientIP is disabled or locked",
    1017101: "Parameter ApiUser is disabled or locked",
    1017410: "Too many declined payments",
    1017411: "Too many login attempts",
    1019103: "Parameter UserName is not available",
    1016103: "Parameter UserName is unauthorized",
    1017103: "Parameter UserName is disabled or locked",
    'namecheap.domains.getList': {
        5019169: 'Unknown exceptions while retriving Domain list'
    },
    'namecheap.domains.getContacts': {
        2019166: "Domain not found",
        2016166: "Domain is not associate with your account",
        4019337: "Unable to retrieve domain contacts",
        3016166: "Domain is not associate with Enom",
        3019510: "This domain has either expired/ was transferred out/ is not associated with your account",
        3050900: "Unknown response from provider",
        5050900: "Unknown exceptions"
    },
    'namecheap.domains.create': {
        2033409: "Possibly a logical error in authentication phase. The order chargeable for Username is not found",
        2033407: "Cannot enable Whoisguard when AddWhoisguard is set as NO",
        2033270: "Cannot enable Whoisguard when AddWhoisguard is set as NO",
        2015267: "EUAgreeDelete option should not be set as NO",
        2011170: "error from PromotionCode",
        2015182: "The contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN",
        2011280: "Validation error from TLD",
        2015167: "Validation error from Years",
        2030280: "TLD is not supported in API",
        2011168: "Nameservers are not valid",
        2011322: "Extended Attributes are not Valid",
        2010323: "Check required field for billing domain contacts",
        2528166: "Order creation failed",
        3019166: "Domain not available",
        4019166: "Domain not available",
        3031166: "Error while getting information from provider",
        3028166: "Error from Enom ( Errcount <> 0 )",
        3031900: "Unknown Response from provider",
        4023271: "Error while adding free positive ssl for the domain",
        4023166: "Error while adding domain",
        5050900: "Unknown error while adding domain to your account",
        4026312: "Error in refunding funds",
        5026900: "Unknown exceptions error while refunding funds",
    },
    'namecheap.domains.getTldList': {
        2011166: "UserName is invalid",
        3050900: "Unknown response from provider"
    },
    'namecheap.domains.setContacts': {
        2019166: "Domain not found",
        2030166: "Edit permission for domain is not supported",
        2010324: "Registrant contacts such as firstname, lastname etc are missing",
        2015182: "The contact phone is invalid. The phone number format is +NNN.NNNNNNNNNN",
        2010325: "Tech contacts such as firstname, lastname etc are missing",
        2010326: "Admin contacts such as firstname, lastname etc are missing",
        2010327: "AuxBilling contacts such as firstname, lastname etc are missing",
        2016166: "Domain is not associated with your account",
        2011280: "Cannot see the contact information for your TLD",
        4022323: "Error from retrieving domain Contacts",
        2011323: "Error retrieving domain Contacts from Enom (Invalid errors)",
        3031510: "Error From Enom when error count <>0",
        3050900: "Unknown error from Enom",
    },
    'namecheap.domains.check': {
        3031510: "Error response from Enom when the error count != 0",
        3011511: "UnKnown response from Provider"
    },
    'namecheap.domains.reactivate': {
        2033409: "Possibly a logical error in authentication phase. Order chargeable for Username is not found",
        2019166: "Domain not found",
        2030166: "Edit permission for Domain is not supported",
        2011170: "Promotion Code is invalid",
        2011280: "TLD is invalid",
        2528166: "Order creation failed",
        3024510: "Error Response from Enom while updating domain",
        3050511: "Unknown error response from Enom",
        2020166: "Domain does not meet the expire date",
        2016166: "Domain is not associate with your account",
        5050900: "Unhandled exceptions",
        4024166: "Failed to update domain in your account"
    },
    'namecheap.domains.renew': {
        2033409: "Possibly a logical error in authentication phase. Order chargeable for Username is not found",
        2011170: "Promotion Code is invalid",
        2011280: "TLD is invalid",
        2528166: "Order creation failed",
        2020166: "Domain has expired.Please reactivate your domain",
        3028166: "Failed to renew error from Enom",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        2016166: "Domain is not associated with your account",
        4024167: "Failed to update years for your domain",
        4023166: "Error occured while domain renewal",
        4022337: "Error in refunding funds"
    },
    'namecheap.domains.getRegistrarLock': {
        2019166: "Domain not found",
        2016166: "Domain is not associate with your account",
        3031510: "Error response from provider when errorcount !=0",
        3050900: "Unknown error response from Enom",
        5050900: "Unknown exceptions"
    },
    'namecheap.domains.setRegistrarLock': {
        2015278: "Invalid data specified for LockAction",
        2019166: "Domain not found",
        2016166: "Domain is not associate with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        2030166: "Edit permission for Domain is not supported",
        3050900: "Unknown error response from Enom",
        5050900: "Unknown exceptions"
    },
    'namecheap.domains.getInfo': {
        5019169: "Unknown exceptions"
    },
    'namecheap.domains.dns.setDefault': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        2030166: "Edit permission for domain is not supported",
        3013288: "Too many records",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        4022288: "Unable to get nameserver list"
    },
    'namecheap.domains.dns.setCustom': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        2030166: "Edit permission for domain is not supported",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        4022288: "Unable to get nameserver list"
    },
    'namecheap.domains.dns.getHosts': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        4022288: "Unable to get nameserver list"
    },
    'namecheap.domains.dns.getList': {
        2019166: "Domain not found",
        2030166: "Edit Permission for Domainname is not supported",
        4023330: "Unable to get DNS hosts from list",
        3031510: "Error From Enom when Errorcount <> 0",
        2030288: "Cannot complete this command as this domain is not using proper DNS servers",
        3050900: "Unknown error from Enom",
        3011288: "Invalid nameserver specified",
        5050900: "Unhandled Exceptions"
    },
    'namecheap.domains.dns.setHosts': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        2030166: "Edit Permission for domain is not supported",
        3013288: "Too many records",
        4013288: "Too many records",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        4022288: "Unable to get nameserver list"
    },
    'namecheap.domains.dns.getEmailForwarding': {
        2019166: "Domain not found",
        2030166: "Edit Permission for domain is not supported",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        2030288: "Cannot complete this command as this domain is not using proper DNS servers",
        4022328: "Unable to get EmailForwarding records from database",
        3011288: "Invalid nameserver",
        5050900: "Unhandled exceptions"
    },
    'namecheap.domains.dns.setEmailForwarding': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        2030166: "Edit Permission for domain is not supported",
        3013288: "Too many records",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom",
        2030288: "Cannot complete this command as this domain is not using proper DNS servers",
        4022288: "Unable to get nameserver list"
    },
    'domains.ns.create': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom"
    },
    'domains.ns.update': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom"
    },
    'domains.ns.delete': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom"
    },
    'domains.ns.getInfo': {
        2019166: "Domain not found",
        2016166: "Domain is not associated with your account",
        3031510: "Error From Enom when Errorcount <> 0",
        3050900: "Unknown error from Enom"
    },
    'domains.transfer.create': {
        2033409: "Possibly a logical error in authentication phase. Order chargeable for Username is not found",
        2011170: "Validation error from promotion code",
        2011280: "TLD is not valid",
        2030280: "TLD is not supported for API",
        2528166: "Order creation failed",
        5050900: "Unhandled exceptions"
    }
};

