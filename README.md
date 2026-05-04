# Omikuji

[![Tests](https://github.com/diwao/omikuji/actions/workflows/test.yml/badge.svg?branch=main)](https://github.com/diwao/omikuji/actions/workflows/test.yml)

## Description

Get a random value from an array.

Omikuji works with both CommonJS and ES Modules, and includes default fortune items so it can be used without initialization.

## Installation

```sh
npm install omikuji
```

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

Omikuji needs at least one item. Passing an empty array to the constructor or `setItems()` throws a `RangeError`.

Removing the last remaining item also throws a `RangeError`.
