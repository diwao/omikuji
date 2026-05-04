const DEFAULT_ITEMS = ['大吉', '中吉', '末吉', '吉', '凶'] as const;

export default class Omikuji<T = string> {
  private items: T[];
  private readonly initialItems: T[];

  constructor(items?: readonly T[]) {
    const sourceItems = items ?? (DEFAULT_ITEMS as unknown as readonly T[]);

    this.assertUsableItems(sourceItems);
    this.items = [...sourceItems];
    this.initialItems = [...sourceItems];
  }

  get(): T {
    const index = Math.floor(Math.random() * this.items.length);
    return this.items[index];
  }

  setItems(items: readonly T[]): this {
    this.assertUsableItems(items);
    this.items = [...items];
    return this;
  }

  add(item: T): this {
    this.items = [...this.items, item];
    return this;
  }

  remove(item: T): boolean {
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

  reset(): this {
    this.items = [...this.initialItems];
    return this;
  }

  getItems(): T[] {
    return [...this.items];
  }

  private assertUsableItems(items: readonly T[]): void {
    if (!Array.isArray(items)) {
      throw new TypeError('Omikuji items must be an array.');
    }

    if (items.length === 0) {
      throw new RangeError('Omikuji must contain at least one item.');
    }
  }
}
