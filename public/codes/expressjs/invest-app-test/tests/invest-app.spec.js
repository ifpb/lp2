import { test, expect } from '@playwright/test';
import crypto from 'crypto';

function createValidUser() {
  const hash = crypto.randomBytes(20).toString('hex');

  const name = `Valid ${hash}`;
  const email = `valid-${hash}@email.com`;

  return {
    name,
    email,
    password: '12345678',
  };
}

test.describe('Invest App', () => {
  let validUser;

  test.beforeAll(() => {
    validUser = createValidUser();
  });

  test('should sign up, sign in, and manage investments', async ({ page }) => {
    // Signup
    await page.goto('/signup.html');
    await page.getByRole('textbox', { name: 'Nome' }).fill(validUser.name);
    await page.getByRole('textbox', { name: 'Email' }).fill(validUser.email);
    await page
      .getByRole('textbox', { name: 'Senha', exact: true })
      .fill(validUser.password);
    await page
      .getByRole('textbox', { name: 'Confirmar Senha' })
      .fill(validUser.password);
    await page.getByRole('button', { name: 'Cadastrar' }).click();
    await expect(page.getByRole('heading', { name: 'Entrar' })).toBeVisible();

    // Signin
    await page.goto('/signin.html');
    await page.getByRole('textbox', { name: 'Email' }).fill(validUser.email);
    await page.getByRole('textbox', { name: 'Senha' }).fill(validUser.password);
    await page.getByRole('button', { name: 'Entrar' }).click();
    await expect(
      page.getByRole('heading', { name: 'Investimentos' })
    ).toBeVisible();

    // Home - Add Investment
    await page.goto('/home.html');
    await page.getByRole('button', { name: '+' }).click();

    await page.getByRole('textbox', { name: 'Nome' }).fill('Tesouro Selic');
    await page.getByRole('spinbutton', { name: 'Valor' }).fill('155');
    await page.getByRole('textbox', { name: 'Taxa' }).fill('100% Selic');
    await page.getByRole('textbox', { name: 'Corretora' }).fill('Inter');
    await page.getByRole('textbox', { name: 'Data' }).fill('2025-02-10');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Tesouro Selic')).toBeVisible();

    // Edit Investment
    await page.locator('svg').nth(1).click();
    await page
      .getByRole('textbox', { name: 'Nome' })
      .fill('Tesouro Selic 2029');
    await page.getByRole('button', { name: 'Submit' }).click();

    await expect(page.getByText('Tesouro Selic 2029')).toBeVisible();

    // Delete Investment
    await page.locator('svg').first().click();
    await page.getByRole('button', { name: 'Confirmar' }).click();

    await expect(page.getByText('Tesouro Selic 2029')).not.toBeVisible();
  });
});
