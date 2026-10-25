# Omikuji

[![npm version](https://img.shields.io/npm/v/omikuji.svg)](https://www.npmjs.com/package/omikuji)
[![Tests](https://github.com/diwao/omikuji/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/diwao/omikuji/actions/workflows/test.yml)

## Description

Get a random value from an array.

Omikuji works with both CommonJS and ES Modules, and includes default fortune items so it can be used without initialization.

## Installation

```sh
npm install omikuji
```

## Development

Use the Node.js version in `.nvmrc` for local development and npm releases:

```sh
nvm install
nvm use
npm ci
npm run build
npm run test:run
```

CI tests the latest available Node.js 22.x and 24.x releases, with minimum
versions of 22.23.4 and 24.22.1 respectively. These minimum versions include
the [October 2026 Node.js security fixes](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases).
Keep `.nvmrc` and the CI minimum versions up to date with security releases.

The package's `engines` field remains `>=18` for installation compatibility;
it does not indicate ongoing testing or security support for every allowed
version. Node.js 18 and 20 are end-of-life. Use a supported Node.js release
with current security patches in production.

## Usage

### CommonJS

```js
const Omikuji = require('omikuji');

const items = ['大吉', '中吉', '末吉', '吉', '凶'];
const omikuji = new Omikuji(items);

console.log(omikuji.get());
```

### ES Modules

```js
import Omikuji from 'omikuji';

const omikuji = new Omikuji(['大吉', '中吉', '末吉', '吉', '凶']);

console.log(omikuji.get());
```

### Without Initialization

```js
import Omikuji from 'omikuji';

const omikuji = new Omikuji();

console.log(omikuji.get());
```

The default items are:

```js
['大吉', '中吉', '末吉', '吉', '凶'];
```

### TypeScript

```ts
import Omikuji from 'omikuji';

const omikuji = new Omikuji<string>(['大吉', '中吉', '末吉', '吉', '凶']);

const result: string = omikuji.get();
```

## Methods

### get()

Returns a random item.

### setItems(items)

Replaces the current items.

### add(item)

Adds one item.

### remove(item)

Removes the first matching item and returns `true`. Returns `false` if the item is not found.

### reset()

Restores the items that were set when the instance was created.

### getItems()

Returns a copy of the current items.

## Errors

Passing a non-array value as `items` to the constructor or `setItems()` throws a `TypeError`.

Omikuji needs at least one item. Passing an empty array to the constructor or `setItems()` throws a `RangeError`.

Removing the last remaining item also throws a `RangeError`.
