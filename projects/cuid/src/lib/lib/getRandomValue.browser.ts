
var getRandomValueFunction;

var crypto:Crypto = typeof window !== 'undefined' &&
  (window.crypto || window['msCrypto']) ||
  typeof self !== 'undefined' &&
  self.crypto;

if (crypto) {
    var lim = Math.pow(2, 32) - 1;
    getRandomValueFunction = function () {
        return crypto.getRandomValues(new Uint32Array(1))[0] / lim;
    };
} else {
    getRandomValueFunction = Math.random;
}

export const getRandomBrowserValue = getRandomValueFunction
