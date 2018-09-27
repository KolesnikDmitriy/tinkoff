import { element, by } from 'protractor';

export default class OplataPage {
  async sendKeysToPayerCode(keys: string) {
    await element(by.xpath('//input[@name="provider-payerCode"]')).sendKeys(keys);
  }

  async sendKeysToPeriod(keys: string) {
    await element(by.xpath('//input[@name="provider-period"]')).sendKeys(keys);
  }

  async clickPayButton() {
    await element(by.xpath('//button[@data-qa-file="UIButton"]')).click();
  }

  async findErrorTextMessage() {
    return await element
      .all(by.xpath('//div[@data-qa-file="UIFormRowError"]'))
      .first()
      .getText();
  }
}
