import { NgElmPage } from './app.po';

describe('ng-elm App', () => {
  let page: NgElmPage;

  beforeEach(() => {
    page = new NgElmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
