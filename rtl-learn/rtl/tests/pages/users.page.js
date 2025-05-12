import { $ } from '@wdio/globals';
import Page from './page';

class UserPage extends Page {
  get loadingTitle() {
    return $('#users-loading');
  }

  get usersList() {
    return $('#users-list');
  }

  get usersItems() {
    return browser.react$$('User');
  }

  async loadData() {
    try {
      await this.open();
      await this.loadingTitle.waitForDisplayed({ timeout: 2000 });
      await this.usersList.waitForDisplayed({ timeout: 2000 });
    } catch (e) {
      throw new Error(e);
    }
  }

  async deleteUser() {
    try {
      const userCount = await this.usersItems.length;

      if (!userCount) {
        throw new Error('Cant find user');
      }

      await this.usersItems[0].$('#user-delete').click();

      const userCountAfterDelete = await this.usersItems.length;

      if (userCount - userCountAfterDelete !== 1) {
        throw new Error(
          'Deletion did not occur or more than 1 user was deleted',
        );
      }
    } catch (e) {
      throw new Error('Cant delete user ' + e.message);
    }
  }

  open() {
    return super.open();
  }
}

export default new UserPage();
