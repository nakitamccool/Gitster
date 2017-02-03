import { GitserPage } from './app.po';

describe('gitser App', function() {
  let page: GitserPage;

  beforeEach(() => {
    page = new GitserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
