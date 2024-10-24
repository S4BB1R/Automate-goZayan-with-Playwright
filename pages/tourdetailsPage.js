const BasePage = require('./basePage');
const { expect } = require('@playwright/test');
class TourDetails extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.itinerary = 'li:has-text("Itinerary")';
        this.itineraryDaySelector = '.itinerary-day';
        this.mealSelector = '.meal';
        this.itineraryDetailsSelector = '#itinerary-details';
        this.itineraryItem = this.page.locator('li', { hasText: 'Itinerary' });
        this.itinerarySelector = '.itinerary-card-wrapper';
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
            await this.page.click(daySelector);
            const itineraryContent = await this.page.locator(this.itinerarySelector).innerText();
            expect(itineraryContent).toContain('Breakfast');
            expect(itineraryContent).toContain('Lunch');
       //    expect(itineraryContent).toContain('Dinner');
            console.log(`${day} is visible: ${isDayVisible}`);
        }

    }
}

module.exports = TourDetails;