import { test, expect } from '@playwright/test';
import { Contact_Page } from '../pages/Contact_Page';

test.describe('1. Form Submission Validation', () => {

  test('Blank field error validation', async ({ page }) => {
    const contactPage = new Contact_Page(page);
    await contactPage.goto();
    await contactPage.submitForm("", "", "", "");
   // await expect(page.locator('.error')).toBeVisible();
  });

  test('Complete form validation', async ({ page }) => {
    const contactPage = new Contact_Page(page);
    await contactPage.goto();
    await contactPage.submitForm(
      "Afrida",
      "afrida.syeda@gmail.com",
      "Subject test",
      "Email test"
    );
   // await expect(contactPage.successMsg).toBeVisible();
   // await expect(contactPage.successMsg).toHaveText(
      "Success! Your details have been submitted successfully."
    //);
  });

});

