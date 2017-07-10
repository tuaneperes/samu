import { SamuPage } from './app.po';

describe('samu App', () => {
  let page: SamuPage;

  beforeEach(() => {
    page = new SamuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
