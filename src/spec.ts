import { browser, element, by, ExpectedConditions } from 'protractor';
import HomePage from './pages/homePage';
import PaymentsPage from './pages/paymentsPage';
import CommunalPaymentsPage from './pages/communalPaymentsPage';
import ZhkuPage from './pages/zhkuPage';
import OplataPage from './pages/oplataPage';

describe('A suite', () => {
  it('contains spec with an expectation', async () => {
    const homePage = new HomePage();
    await homePage.load();

    const paymentPage: PaymentsPage = await homePage.goToPaymentsPage();

    const communalPaymentsPage: CommunalPaymentsPage = await paymentPage.goToCommunalPage();

    expect(await communalPaymentsPage.getCityName()).toEqual('Москве');
    expect(await communalPaymentsPage.findTextFirstProvider()).toEqual('ЖКУ-Москва');

    const zhkhPage: ZhkuPage = await communalPaymentsPage.goToZhkuPage();

    const oplataPage: OplataPage = await zhkhPage.goToOplataPage();

    await oplataPage.sendKeysToPayerCode('00000');
    await oplataPage.sendKeysToPeriod('00000');
    await oplataPage.clickPayButton();
    expect(await oplataPage.findErrorTextMessage()).toEqual('Поле неправильно заполнено');
  });
});
