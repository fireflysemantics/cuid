/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

import { browserFingerprint } from "./lib/fingerprint.browser"
import { pad } from "./lib/pad"
import { getRandomBrowserValue } from './lib/getRandomValue.browser'

var c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize);

function randomBrowserBlock() {
    return pad((getRandomBrowserValue() *
        discreteValues << 0)
        .toString(base), blockSize);
}

function safeCounter() {
    c = c < discreteValues ? c : 0;
    c++; // this is not subliminal
    return c - 1;
}

export function cuid() {
    // Starting with a lowercase letter makes
    // it HTML element ID friendly.
    var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter = pad(safeCounter().toString(base), blockSize),

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        print = browserFingerprint(),

        // Grab some more chars from Math.random()
        random = randomBrowserBlock() + randomBrowserBlock();

    return letter + timestamp + counter + print + random;
}

cuid.fingerprint = browserFingerprint;


export function cuidSlug() {
    var date = new Date().getTime().toString(36),
        counter = safeCounter().toString(36).slice(-4),
        print = browserFingerprint().slice(0, 1) +
            browserFingerprint().slice(-1),
        random = randomBrowserBlock().slice(-2);

    return date.slice(-2) +
        counter + print + random;
};

export function isCuid(stringToCheck) {
    if (typeof stringToCheck !== 'string') return false;
    if (stringToCheck.startsWith('c')) return true;
    return false;
};

export function isCuidSlug(stringToCheck) {
    if (typeof stringToCheck !== 'string') return false;
    var stringLength = stringToCheck.length;
    if (stringLength >= 7 && stringLength <= 10) return true;
    return false;
};