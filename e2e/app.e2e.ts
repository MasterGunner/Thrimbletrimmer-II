import { ThrimbletrimmerIIPage } from './app.po';

describe('thrimbletrimmer-ii App', function() {
  let page: ThrimbletrimmerIIPage;

  beforeEach(() => {
    page = new ThrimbletrimmerIIPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('thrimbletrimmer-ii works!');
  });
});
