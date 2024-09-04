const Page = require('./page');

class PricingCalculatorPage extends Page {
    get computeEngineSection() { return $('#compute'); }
    get numberOfInstances() { return $('input[aria-label="Number of instances"]'); }
    get vmClassDropdown() { return $('select[aria-label="VM Class"]'); }
    get instanceTypeDropdown() { return $('select[aria-label="Instance type"]'); }
    get addGpusCheckbox() { return $('input[id="input_70"]'); }
    get gpuTypeDropdown() { return $('select[aria-label="GPU type"]'); }
    get localSsdDropdown() { return $('select[aria-label="Local SSD"]'); }
    get datacenterLocationDropdown() { return $('select[aria-label="Datacenter location"]'); }
    get committedUsageDropdown() { return $('select[aria-label="Committed usage"]'); }
    get addToEstimateButton() { return $('button[aria-label="Add to Estimate"]'); }
    get emailEstimateButton() { return $('button[aria-label="Email Estimate"]'); }
    get emailField() { return $('input[type="email"]'); }
    get osList () {return $('div[class="VfPpkd-aPP78e"')}

    async configureComputeEngine(data) {
        await this.computeEngineSection.click();
        await this.numberOfInstances.setValue(data.numberOfInstances);
        await this.osList.setValue(data.osList);
        await this.vmClassDropdown.selectByVisibleText(data.vmClass);
        await this.instanceTypeDropdown.selectByVisibleText(data.instanceType);
        await this.addGpusCheckbox.click();
        await this.gpuTypeDropdown.selectByVisibleText(data.gpuType);
        await this.localSsdDropdown.selectByVisibleText(data.localSsd);
        await this.datacenterLocationDropdown.selectByVisibleText(data.datacenterLocation);
        await this.committedUsageDropdown.selectByVisibleText(data.committedUsage);
        await this.addToEstimateButton.click();
    }

    async emailEstimate(email) {
        await this.emailEstimateButton.click();
        await this.emailField.setValue(email);
        await $('button[aria-label="Send Email"]').click();
    }

    open() {
        return super.open('https://cloud.google.com/products/calculator/');
    }
}

module.exports = new PricingCalculatorPage();
