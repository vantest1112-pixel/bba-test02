import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/E-commerce site testing/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://e-commerce-dev.betterbytesvn.com');

  // Click the get started link.
  await page.getByRole('link', { name: 'DANH SÁCH KHÓA HỌC' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Shop' })).toBeVisible();
});
