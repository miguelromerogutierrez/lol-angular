import { LolAngularPage } from './app.po';

describe('lol-angular App', function() {
  let page: LolAngularPage;

  beforeEach(() => {
    page = new LolAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
