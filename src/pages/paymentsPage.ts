import { browser, element, by, ExpectedConditions } from 'protractor';
import CommunalPaymentsPage from './communalPaymentsPage';

export default class PaymentsPage {
  async goToCommunalPage() {
    await element(by.xpath('//div[@data-qa-file="PaymentsCategoryItem" and @aria-label="ЖКХ"]/a[@data-qa-file="Clickable"]')).click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/categories/kommunalnie-platezhi/'), 15000);

    return new CommunalPaymentsPage();
  }

  async searchText(text: string) {
    await element(by.xpath('//input[@data-qa-file="SearchInput"]')).sendKeys(text);
    await browser.wait(() => {
      return element(by.xpath('//div[@data-qa-file="SuggestEntry"]/div[@data-qa-file="Text"]')).isPresent();
    }, 5000);
  }

  async getFirstResult() {
    return await element
      .all(by.xpath('//div[@data-qa-file="SuggestEntry"]/div[@data-qa-file="Text"]'))
      .first()
      .getText();
  }
}
