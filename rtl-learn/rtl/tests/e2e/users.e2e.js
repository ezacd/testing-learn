import UsersPage from '../pages/users.page';

describe('Users', () => {
  it('load data', async () => {
    await UsersPage.loadData();
  });

  it('delete user', async () => {
    await UsersPage.loadData();
    await UsersPage.deleteUser;
  });
});
