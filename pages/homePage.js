const BasePage = require('./basePage');

class HomePage extends BasePage {
    constructor(page) {
        super(page);
        this.currencyRegionSelector = '.summary';
        this.regionSelector = 'li.active:has-text("Bangladesh")';
        this.currencySelector = 'li.active:has-text("BDT")';
        this.applyButton = 'button.btn.btn-secondary.btn-sm:has-text("Apply")';
        this.tourBox = '.search-type-tab .product:has-text("Tour")';
        this.searchPlaceButton = '.box.location';
        this.searchInput = '#searchString';
        this.locationSelector = '.location .name:has-text("Sundarbans")';
        this.searchButton = '.search-btn';
    }



    async clickRegionAndCurrency() {

        await this.page.click(this.currencyRegionSelector);

    }
    async verifyRegion() {
        const isBangladeshActive = await this.page.isVisible(this.regionSelector);
        console.log(`Is Bangladesh active: ${isBangladeshActive ? 'Yes' : 'No'}`);

        return isBangladeshActive;
    }
    async verifyCurrency() {
        const isBDTActive = await this.page.isVisible(this.currencySelector);
        console.log(`Is BDT active: ${isBDTActive ? 'Yes' : 'No'}`);

        return isBDTActive;
    }

    async searchForTour(destination) {
        await this.page.click(this.applyButton);
        await this.page.waitForTimeout(5000)
        await this.page.click(this.tourBox);
        await this.page.click(this.searchPlaceButton);
        await this.page.fill(this.searchInput, destination);
        await this.page.click(this.locationSelector);
        await this.page.click(this.searchButton);
    }
}

module.exports = HomePage;
