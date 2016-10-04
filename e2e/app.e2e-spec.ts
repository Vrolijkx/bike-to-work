import { BikeToWorkPage } from './app.po';

describe('bike-to-work App', function() {
  let page: BikeToWorkPage;

  beforeEach(() => {
    page = new BikeToWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
