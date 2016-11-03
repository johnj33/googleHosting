import { JJsSitePage } from './app.po';

describe('jjs-site App', function() {
  let page: JJsSitePage;

  beforeEach(() => {
    page = new JJsSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
