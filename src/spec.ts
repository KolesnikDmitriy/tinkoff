import { browser, element, by, ExpectedConditions } from 'protractor';

describe('A suite', () => {
  it('contains spec with an expectation', async () => {
    browser.waitForAngularEnabled(false);
    browser.get('https://tinkoff.ru');
    const payments = element(by.linkText('Платежи'));
    payments.click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/'), 15000);

    const kommunalniePlatezhi = element(by.xpath('//div[@data-qa-file="PaymentsCategoryItem" and @aria-label="ЖКХ"]/a[@data-qa-file="Clickable"]'));
    kommunalniePlatezhi.click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/categories/kommunalnie-platezhi/'), 15000);

    const city = element(by.xpath('//span[@data-qa-file="PaymentsCatalogHeader"]/span/span'));
    const cityName = await city.getText();
    expect(cityName).toEqual('Москве');

    browser.wait(() => {
      return element(by.xpath('//div[@data-qa-file="FadeText"]')).isPresent();
    }, 5000);

    const zhkh = element.all(by.xpath('//div[@data-qa-file="FadeText"]')).first();
    zhkh.click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/zhku-moskva/'), 15000);

    const payInMoscow = element(by.xpath('//span[@data-qa-file="Tab" and text() = "Оплатить ЖКУ в Москве"]'));
    payInMoscow.click();

    browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/zhku-moskva/oplata/?tab=pay'), 15000);
  });
});
