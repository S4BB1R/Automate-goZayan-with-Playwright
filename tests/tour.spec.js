const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');
const TourPage = require('../pages/tourPage');
const Helpers = require('../utils/helpers');
const TourDetails = require('../pages/tourdetailsPage')
const TourConsultationFormPage = require('../pages/tourConsultationFormPage');

test.describe('Tour Search Tests', () => {
    let browser;
    let page;
    let homePage;
    let tourPage;
    let helpers;
    let tourDetails;
    let context ;
    let formPage;


    test.beforeAll(async () => {
        browser = await chromium.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        
        homePage = new HomePage(page);
        tourPage = new TourPage(page);
        helpers = new Helpers(page);
        tourDetails = new TourDetails(page);
        formPage= new TourConsultationFormPage(page);

    });

    test.afterAll(async () => {
        await browser.close();
    });

    test('Verify region and currency, search for tours, and filter Eco Tours', async () => {
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


        await formPage.fillForm(
            'John',            
            'Doe',             
            'john.doe@example.com', 
            '01712345678',     
            '2024-10-30',      
            'Looking for a comfortable tour package' 
          );

          await formPage.submitForm();

    });
});
