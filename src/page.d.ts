import { By } from 'selenium-webdriver';

export interface HomePageAdapter {
  getPaymnetLink: () => By;
  load: () => void;
}
