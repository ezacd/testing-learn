import { expect } from '@wdio/globals';
import HelloPage from '../pages/hello.page.js';
import helloPage from '../pages/hello.page.js';

describe('My Hello application', () => {
  it('should login with valid credentials', async () => {
    await HelloPage.open();

    await HelloPage.toggleTitleWithInput('hello');
    await expect(helloPage.helloTitle).toBeExisting();
    await HelloPage.click();
    await expect(helloPage.helloTitle).not.toBeExisting();
  });
});
