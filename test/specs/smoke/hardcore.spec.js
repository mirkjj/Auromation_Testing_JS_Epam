const CloudHomePage = require('../../pageobjects/CloudHomePage');
const PricingCalculatorPage = require('../../pageobjects/PricingCalculatorPage');
const TemporaryEmailPage = require('../../pageobjects/TemporaryEmailPage');
const pricingData = require('../../data/pricing_data.json');
const emailData = require('../../data/email_data.json');

describe('Hardcore', () => {
    it('should estimate pricing and send an email', async () => {
        await CloudHomePage.open();
        await CloudHomePage.searchForCalculator();

        await PricingCalculatorPage.open();
        await PricingCalculatorPage.configureComputeEngine(pricingData);

        await PricingCalculatorPage.emailEstimate(email);

        await TemporaryEmailPage.open();
        const email = await TemporaryEmailPage.getEmail();

        const estimatedCostInEmail = await TemporaryEmailPage.getEstimatedCostFromEmail();
        const estimatedCostInCalculator = await $('span.js-price-cost').getText();

        expect(estimatedCostInEmail).toContain(estimatedCostInCalculator);
    });
});
