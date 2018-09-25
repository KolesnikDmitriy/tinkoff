import 'jasmine';
import { browser } from 'protractor';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    browser.get('https://tinkoff.ru');

    expect(true).toBe(true);
  });
});
