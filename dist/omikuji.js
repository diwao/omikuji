'use strict';

const DEFAULT_ITEMS = ['大吉', '中吉', '末吉', '吉', '凶'];
class Omikuji {
    constructor(items) {
        const sourceItems = items !== null && items !== void 0 ? items : DEFAULT_ITEMS;
        this.assertUsableItems(sourceItems);
        this.items = [...sourceItems];
        this.initialItems = [...sourceItems];
    }
    get() {
        const index = Math.floor(Math.random() * this.items.length);
        return this.items[index];
    }
    setItems(items) {
        this.assertUsableItems(items);
        this.items = [...items];
        return this;
    }
    add(item) {
        this.items = [...this.items, item];
        return this;
    }
    remove(item) {
        const index = this.items.findIndex((currentItem) => Object.is(currentItem, item));
        if (index === -1) {
            return false;
        }
        if (this.items.length === 1) {
            throw new RangeError('Omikuji must contain at least one item.');
        }
        this.items = this.items.filter((_, itemIndex) => itemIndex !== index);
        return true;
    }
    reset() {
        this.items = [...this.initialItems];
        return this;
    }
    getItems() {
        return [...this.items];
    }
    assertUsableItems(items) {
        if (items.length === 0) {
            throw new RangeError('Omikuji must contain at least one item.');
        }
    }
}

module.exports = Omikuji;
