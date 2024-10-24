class TourConsultationFormPage {
    constructor(page) {
      this.page = page;
  
      // Locators for the form fields
      this.firstNameInput = this.page.locator('#first-name');
      this.lastNameInput = this.page.locator('#last-name');
      this.emailInput = this.page.locator('#email');
      this.phoneNumberInput = this.page.locator('#phone-number');
      this.preferredDateButton = this.page.locator('#preferred_date');
      this.requirementsTextarea = this.page.locator('#requirement');
      this.submitButton = this.page.locator('button:has-text("Submit")');
    }

    async fillForm(firstName, lastName, email, phoneNumber, preferredDate, requirements) {
      await this.firstNameInput.fill(firstName);
      await this.lastNameInput.fill(lastName);
      await this.emailInput.fill(email);
      await this.phoneNumberInput.fill(phoneNumber);

      await this.preferredDateButton.click();

  
      await this.requirementsTextarea.fill(requirements);
    }
  
    async submitForm() {
      await this.submitButton.click();
    }
  }
  
module.exports = TourConsultationFormPage;
  