const BasePage = require('./basePage');

class TourPage extends BasePage {
    constructor(page) {
        super(page);
        this.locationSelector = '.location';
        this.ecoToursTag = 'text=Eco Tours';
        this.tourCard = '.tour-card';
        this.resetFilterButton = 'button:has-text("Reset Filter")';
        this.featureSelector = '.tour-card .feature-list .feature-item';
        this.firstTourCard = '.tour-card:nth-child(2)';
    }

    async verifyLocations(expectedLocation) {
        const locations = await this.page.$$eval(this.locationSelector, els => els.map(el => el.textContent));
        console.log(locations);
        return locations.every(location => location.includes(expectedLocation));
    }

    async filterEcoTours() {
        await this.page.click(this.ecoToursTag);
    }

    async resetFilterIfNoResults() {
        const results = await this.page.$$(this.tourCard);
        if (results.length === 0) {
            await this.page.click(this.resetFilterButton);
        }
    }

    async checkEcoTourTags() {
        const ecoToursFound = await this.page.$$eval(this.featureSelector, features => {
            return features.some(feature => feature.textContent.includes('Eco Tours'));
        });

        if (ecoToursFound) {
            console.log('Eco Tours are present in the search results.');
        } else {
            console.log('No Eco Tours found in the search results.');
        }
    }

    async clickOnFirstTourCard() {
        await this.page.click(this.firstTourCard);
    }


}

module.exports = TourPage;
