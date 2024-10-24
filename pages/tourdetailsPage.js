const BasePage = require('./basePage');

class TourDetails extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.itinerary = 'li[data-v-fb0eb17e]:has-text("Itinerary")';
        this.itineraryDaySelector = '.itinerary-day';
        this.mealSelector = '.meal';
        this.itineraryDetailsSelector = '#itinerary-details';
    }

    async verifyMeals() {

        await this.page.click(this.itinerary);

        await this.page.waitForSelector(this.itineraryDetailsSelector, { state: 'visible' });


        const isItineraryVisible = await this.page.isVisible(this.itineraryDetailsSelector);
        console.log(`Itinerary details are visible: ${isItineraryVisible}`);


        const days = ['Day 1', 'Day 2', 'Day 3'];
        for (const day of days) {
            const daySelector = `h4.day-title:has-text("${day}")`;
            const isDayVisible = await this.page.isVisible(daySelector);
            console.log(`${day} is visible: ${isDayVisible}`);
        }

    }
}

module.exports = TourDetails;