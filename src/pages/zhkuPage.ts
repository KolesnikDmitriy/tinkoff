import OplataPage from './oplataPage';
import { browser, element, by, ExpectedConditions } from 'protractor';

export default class ZhkuPage {
  async goToOplataPage() {
    await element(by.xpath('//span[@data-qa-file="Tab" and text() = "Оплатить ЖКУ в Москве"]')).click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/zhku-moskva/oplata/?tab=pay'), 15000);

    return new OplataPage();
  }
}
