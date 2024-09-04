const CloudHomePage = require('../../pageobjects/CloudHomePage');
const PricingCalculatorPage = require('../../pageobjects/PricingCalculatorPage');
const pricingData = require('../../data/pricing_data.json');

describe('Hurt Me Plenty', () => {
    it('should estimate pricing correctly', async () => {
        await CloudHomePage.open();
        await CloudHomePage.searchForCalculator();

        await PricingCalculatorPage.open();
        await PricingCalculatorPage.configureComputeEngine(pricingData);

    });
});
