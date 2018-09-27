import { browser, element, by, ExpectedConditions } from 'protractor';
import PaymentsPage from './paymentsPage';

export default class DefaultPage {
  async goToPaymentsPage() {
    await element(by.linkText('Платежи')).click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/payments/'), 15000);
    return new PaymentsPage();
  }
}
