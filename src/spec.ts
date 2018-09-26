import 'jasmine';
import { browser, element, by, ExpectedConditions } from 'protractor';
import { HomePage } from './homePage';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    const homePage = new HomePage();

    homePage.load();
    homePage.getPaymnetLink().click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/'), 5000);

    const kommunalniePlatezhi = element(by.linkText('ЖКХ'));
    kommunalniePlatezhi.click();
    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/categories/kommunalnie-platezhi/'), 5000);
  });
});
