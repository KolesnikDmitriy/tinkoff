import 'jasmine';
import { browser, element, by, ExpectedConditions } from 'protractor';

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://tinkoff.ru');
    const paymants = element(by.linkText('Платежи'));
    paymants.click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/'), 5000);

    browser.getCurrentUrl().then(url => {
      console.log(url);
    });
  });
});
