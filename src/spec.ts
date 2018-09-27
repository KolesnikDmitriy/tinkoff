import HomePage from './pages/homePage';

describe('Tinkoff base suite', () => {
  let firstProvider: string;

  it('Navigation to zhku-moskva/oplata', async () => {
    const homePage = new HomePage();
    await homePage.load();

    const paymentPage = await homePage.goToPaymentsPage();

    const communalPaymentsPage = await paymentPage.goToCommunalPage();

    expect(await communalPaymentsPage.getCityName()).toEqual('Москве');
    firstProvider = await communalPaymentsPage.findTextFirstProvider();
    expect(firstProvider).toEqual('ЖКУ-Москва');

    const zhkhPage = await communalPaymentsPage.goToZhkuPage();

    const oplataPage = await zhkhPage.goToOplataPage();

    await oplataPage.sendKeysToPayerCode('00000');
    await oplataPage.sendKeysToPeriod('00000');
    await oplataPage.clickPayButton();
    expect(await oplataPage.findErrorTextMessage()).toEqual('Поле неправильно заполнено');
  });

  it('Search on payments', async () => {
    const homePage = new HomePage();
    await homePage.load();
    const paymentPage = await homePage.goToPaymentsPage();

    await paymentPage.searchText(firstProvider);
    expect(await paymentPage.getFirstResult()).toEqual(firstProvider);

    const zhkhPage = await paymentPage.clickToFirstProvider();
    const oplataPage = await zhkhPage.goToOplataPage();

    expect(await oplataPage.getUrl()).toEqual('https://www.tinkoff.ru/zhku-moskva/oplata/?tab=pay');
  });

  it('find first provider in st. petersburg', async () => {
    const homePage = new HomePage();
    await homePage.load();
    const paymentPage = await homePage.goToPaymentsPage();
    const communalPaymentsPage = await paymentPage.goToCommunalPage();

    await communalPaymentsPage.setCity('г. Санкт-Петербург');
    expect(await communalPaymentsPage.getCityName()).toEqual('Санкт-Петербурге');
  });
});
