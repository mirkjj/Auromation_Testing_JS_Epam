const Page = require('./page');

class TemporaryEmailPage extends Page {
    get emailAddress() { return $('#email'); }
    get emailBody() { return $('div.mail-content') }

    async getEmail() {
        return await this.emailAddress.getValue();
    }

    async getEstimatedCostFromEmail() {
        await browser.pause(20000);
        return await this.emailBody.getText();
    }

    open() {
        return super.open('https://10minutemail.com');
    }
}

module.exports = new TemporaryEmailPage();
