import { browser, element, by, ExpectedConditions } from 'protractor';
import CommunalPaymentsPage from './communalPaymentsPage';
import DefaultPage from './defaultPage';

export default class PaymentsPage extends DefaultPage {
  async goToCommunalPage() {
    await element(by.xpath('//div[@data-qa-file="PaymentsCategoryItem" and @aria-label="ЖКХ"]/a[@data-qa-file="Clickable"]')).click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/categories/kommunalnie-platezhi/'), 15000);

    return new CommunalPaymentsPage();
  }
}
