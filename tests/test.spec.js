 import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('E');
  await page.locator('#loginusername').press('CapsLock');
  await page.locator('#loginusername').fill('Emon');
  await page.locator('#loginpassword').click();
  await page.locator('#loginpassword').fill('test@123');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Phones' }).click();
  await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  await page.locator('div').filter({ hasText: 'About Us We believe' }).nth(3).click();
  await page.getByText('About Us', { exact: true }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
  await page.getByRole('link', { name: 'About us' }).click();
  await page.locator('#videoModal').getByText('Close', { exact: true }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
});