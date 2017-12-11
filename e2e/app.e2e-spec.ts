import { FirebaseDemoPage } from './app.po';

describe('firebase-demo App', () => {
  let page: FirebaseDemoPage;

  beforeEach(() => {
    page = new FirebaseDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
