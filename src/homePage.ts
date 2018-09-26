import { browser, element, by } from 'protractor';
import { HomePageAdapter } from './page';

export class HomePage implements HomePageAdapter {
  getPaymnetLink() {
    const payments = element(by.linkText('Платежи'));

    return payments;
  }

  load() {
    browser.waitForAngularEnabled(false);
    browser.get('https://tinkoff.ru');
  }

  navigatePaymants() {}
}
