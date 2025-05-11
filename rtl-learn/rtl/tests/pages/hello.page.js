import { $ } from '@wdio/globals';
import Page from './page.js';

class HelloPage extends Page {
  get toggleBtn() {
    return $('#toggle');
  }

  get searchInput() {
    return $('#search');
  }

  get helloTitle() {
    return $('#hello');
  }

  async click() {
    await this.toggleBtn.click();
  }

  async toggleTitleWithInput(text) {
    await this.searchInput.setValue(text);
    await this.toggleBtn.click();
  }

  open() {
    return super.open();
  }
}

export default new HelloPage();
