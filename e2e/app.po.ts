export class ThrimbletrimmerIIPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('thrimbletrimmer-ii-app h1')).getText();
  }
}
