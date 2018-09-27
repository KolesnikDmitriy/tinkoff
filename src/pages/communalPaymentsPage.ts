import { browser, element, by, ExpectedConditions } from 'protractor';
import ZhkuPage from './zhkuPage';

export default class CommunalPaymentsPage {
  async getCityName() {
    return await element(by.xpath('//span[@data-qa-file="PaymentsCatalogHeader"]/span/span')).getText();
  }

  async findTextFirstProvider() {
    await browser.wait(() => {
      return element(by.xpath('//div[@data-qa-file="FadeText"]')).isPresent();
    }, 5000);
    return await element
      .all(by.xpath('//div[@data-qa-file="FadeText"]'))
      .first()
      .getText();
  }

  async goToZhkuPage() {
    await element
      .all(by.xpath('//div[@data-qa-file="FadeText"]'))
      .first()
      .click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/zhku-moskva/'), 15000);
    return new ZhkuPage();
  }
}
