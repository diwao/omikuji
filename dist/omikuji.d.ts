export default class Omikuji<T = string> {
    private items;
    private readonly initialItems;
    constructor(items?: readonly T[]);
    get(): T;
    setItems(items: readonly T[]): this;
    add(item: T): this;
    remove(item: T): boolean;
    reset(): this;
    getItems(): T[];
    private assertUsableItems;
}
