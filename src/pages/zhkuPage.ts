import OplataPage from './oplataPage';
import { browser, element, by, ExpectedConditions } from 'protractor';
import DefaultPage from './defaultPage';

export default class ZhkuPage extends DefaultPage {
  async goToOplataPage() {
    await element(by.xpath('//span[@data-qa-file="Tab" and text() = "Оплатить ЖКУ в Москве"]')).click();
    await browser.wait(ExpectedConditions.urlIs('https://www.tinkoff.ru/zhku-moskva/oplata/?tab=pay'), 15000);

    return new OplataPage();
  }
}
