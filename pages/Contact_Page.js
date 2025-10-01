exports.Contact_Page = class Contact_Page {
  constructor(page) {
    this.page = page;
    this.nameField = page.getByRole('textbox', { name: 'Name' });
    this.emailField = page.getByRole('textbox', { name: 'Email', exact: true });
    this.subjectField = page.getByRole('textbox', { name: 'Subject' });
    this.messageField = page.getByRole('textbox', { name: 'Your Message Here' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.successMsg = page.locator('.status.alert.alert-success');
  }

  async goto() {
    await this.page.goto("https://automationexercise.com/contact_us");
  }

  async submitForm(name, email, subject, message) {
    await this.nameField.fill(name);
    await this.emailField.fill(email);
    await this.subjectField.fill(subject);
    await this.messageField.fill(message);
    await this.submitButton.click();
  }

  async getSuccessMessage() {
    return await this.successMsg.textContent();
  }

  async handleDialog() {
    this.page.once('dialog', async (dialog) => {
      console.log(`Dialog says: ${dialog.message()}`);
      await dialog.accept();
    });
  }
};
