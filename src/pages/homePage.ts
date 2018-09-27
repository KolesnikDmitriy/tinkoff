import { browser } from 'protractor';
import DefaultPage from './defaultPage';

export default class HomePage extends DefaultPage {
  async load() {
    browser.waitForAngularEnabled(false);
    await browser.get('https://tinkoff.ru');
  }
}
