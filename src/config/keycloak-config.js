var session = require('express-session');
var Keycloak = require('keycloak-connect');

let _keycloak;

var keycloakConfig = {
    clientId: 'workbc-api',
    bearerOnly: true,
    serverUrl: 'http://192.168.1.8:8080/auth',
    realm: 'Workbc',
    realmPublicKey: 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkSZHOyQNobnsRbEVSd1tHl26sKytSQsocvG01xmX+H5m2ABK+I/tHBvyBo0g2rg/kNaE8FURS9kZdJcZrM3prNdJhXTNak/NeVkFpKAAXu53/nxGm8X96D4b8kxaLy/p2CgIIE19/xLV9E88/+wkRgm20y+4kqDGGTeUk+/Jht44bOL9YUa4F2bVv35qg3AIpIRj8Xo4i7X3AuDxRtsrAi2H/1drr21Ib/1nW93l7cM+u+r6HjgtZVQrRa2a8ShZQh+m6qPQzdaa5Ic0bulDWavrB3RneRBlnekCOEddQfIzejXnaLJOaObPdofNrZX+wi+PD3+waAQ1ZVeAuY2iowIDAQAB'
    //credentials: {
    //    secret: 'b3750537-d558-479a-ab6d-1133f6e3ab9b'
    //}
};

function initKeycloak() {
    if (_keycloak) {
        console.warn("Trying to init Keycloak again!");
        return _keycloak;
    }
    else {
        console.log("Initializing Keycloak...");
        var memoryStore = new session.MemoryStore();
        _keycloak = new Keycloak({ store: memoryStore }, keycloakConfig);
        return _keycloak;
    }
}

function getKeycloak() {
    if (!_keycloak) {
        console.error('Keycloak has not been initialized. Please called init first.');
    }
    return _keycloak;
}

module.exports = {
    initKeycloak,
    getKeycloak
};