class Helpers {
    constructor(page) {
        this.page = page;
    }

    async scrollToTop() {
        await this.page.evaluate(() => {
            window.scrollTo(0, 0);
        });
    }
}

module.exports = Helpers;

