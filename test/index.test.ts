import { afterEach, describe, expect, it, vi } from 'vitest';
import Omikuji from '../src/index';

const defaultItems = ['大吉', '中吉', '末吉', '吉', '凶'];

describe('Omikuji', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('keeps the existing constructor and get API', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0);

    const omikuji = new Omikuji(['大吉', '凶']);

    expect(omikuji.get()).toBe('大吉');
  });

  it('uses default items when initialized without an array', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.999999);

    const omikuji = new Omikuji();

    expect(defaultItems).toContain(omikuji.get());
    expect(omikuji.get()).toBe('凶');
  });

  it('uses Math.random to select item boundaries', () => {
    const omikuji = new Omikuji(['first', 'middle', 'last']);

    vi.spyOn(Math, 'random').mockReturnValueOnce(0).mockReturnValueOnce(0.34).mockReturnValueOnce(0.999999);

    expect(omikuji.get()).toBe('first');
    expect(omikuji.get()).toBe('middle');
    expect(omikuji.get()).toBe('last');
  });

  it('copies constructor items and returned items defensively', () => {
    const items = ['大吉', '凶'];
    const omikuji = new Omikuji(items);

    items.push('後から追加');
    const returnedItems = omikuji.getItems();
    returnedItems.push('外部変更');

    expect(omikuji.getItems()).toEqual(['大吉', '凶']);
  });

  it('sets, adds, removes, and resets items', () => {
    const omikuji = new Omikuji(['大吉', '凶']);

    expect(omikuji.setItems(['吉']).add('末吉')).toBe(omikuji);
    expect(omikuji.getItems()).toEqual(['吉', '末吉']);
    expect(omikuji.remove('吉')).toBe(true);
    expect(omikuji.remove('missing')).toBe(false);
    expect(omikuji.getItems()).toEqual(['末吉']);
    expect(omikuji.reset()).toBe(omikuji);
    expect(omikuji.getItems()).toEqual(['大吉', '凶']);
  });

  it('throws for empty item lists', () => {
    expect(() => new Omikuji([])).toThrow(RangeError);
    expect(() => new Omikuji(['大吉']).setItems([])).toThrow(RangeError);
  });

  it('throws when removing the last item', () => {
    const omikuji = new Omikuji(['大吉']);

    expect(() => omikuji.remove('大吉')).toThrow(RangeError);
    expect(omikuji.getItems()).toEqual(['大吉']);
  });
});
