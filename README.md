[![Build Status](https://travis-ci.org/fireflysemantics/cuid.svg?branch=master)](https://travis-ci.org/fireflysemantics/cuid)

# Cuid

## Install

```
npm i -S @fireflysemantics/cuid
npm i -S tslib
```

## Usage

This version of `cuid` is built mainly for the Typescript / Browser use case only.  For node or react native, use [cuid](https://www.npmjs.com/package/cuid).

Identifiers generated with `cuidSlug` will be shorter:


```
import { cuid, cuidSlug as slug } from '@fireflysemantics/cuid';
console.log( `cuid: ${cuid()}`);
console.log( `slug: ${slug()}` );
```

[Stackblitz Demo](https://stackblitz.com/edit/cuid-stackblitz?file=index.ts)

[Generating Collision Resistant Fast Unique IDs with Typescript](https://medium.com/@ole.ersoy/generating-collision-resistant-fast-unique-ids-d7a9d1286d9c)
## Build

Run `npm run b` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run p`.

## Running unit tests

Run `npm t` to execute the unit tests via delightful [Jest](https://jestjs.io/).


This version of `cuid` is built mainly for the Typescript / Browser use case only.  For node or react native, use [cuid](https://www.npmjs.com/package/cuid).

## Build

Run `npm run b` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `npm run p`.

## Running unit tests

Run `npm t` to execute the unit tests via delightful [Jest](https://jestjs.io/).
