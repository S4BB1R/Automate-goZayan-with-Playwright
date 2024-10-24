const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const TourPage = require('../pages/tourPage');
const Helpers = require('../utils/helpers');
const TourDetails = require('../pages/tourdetailsPage')

test.describe('Tour Search Tests', () => {
    let browser;
    let page;
    let homePage;
    let tourPage;
    let helpers;
    let tourDetails;
    let context ;


    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        
        homePage = new HomePage(page);
        tourPage = new TourPage(page);
        helpers = new Helpers(page);
        tourDetails = new TourDetails(page);

    });

    test.afterAll(async () => {
        await browser.close();
    });

    test('Verify region and currency, search for tours, and filter Eco Tours', async ({ context }) => {
        await page.goto('/')

        await homePage.clickRegionAndCurrency();
        const isRegionBD = await homePage.verifyRegion();
        expect(isRegionBD).toBe(true);


        const isCurrencyBDT = await homePage.verifyCurrency();
        expect(isCurrencyBDT).toBe(true);

        await page.waitForTimeout(3000);
        await homePage.searchForTour('Sundarbans');

        await page.waitForTimeout(5000);
        await tourPage.verifyLocations('Khulna');

        await tourPage.filterEcoTours();
        await page.waitForTimeout(5000);
        await tourPage.resetFilterIfNoResults();
        await tourPage.checkEcoTourTags();
        await helpers.scrollToTop();

        
        await tourPage.clickOnFirstTourCard();
        const page2Promise = page.waitForEvent('popup');
        const page2 = await page2Promise;

        tourDetails = new TourDetails(page2);
        await tourDetails.verifyMeals();
    });
});
