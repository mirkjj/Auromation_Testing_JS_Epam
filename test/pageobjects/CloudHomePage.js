const Page = require('./page');

class CloudHomePage extends Page {
    get searchButton() { return $('button[aria-label="Search"]'); }
    get searchInput() { return $('input[aria-label="Search"]'); }

    async searchForCalculator() {
        await this.searchButton.click();
        await this.searchInput.setValue('Google Cloud Platform Pricing Calculator');
        await this.searchInput.keys('Enter');
    }

    open() {
        return super.open('https://cloud.google.com/');
    }
}

module.exports = new CloudHomePage();
