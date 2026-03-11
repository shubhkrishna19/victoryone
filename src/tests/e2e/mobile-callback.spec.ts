import { expect, test } from "@playwright/test";

test("mobile-sticky-cta-opens-callback", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Request Callback" }).last().click();

  await expect(page.getByRole("dialog", { name: "Request a callback" })).toBeVisible();
  await expect(page.getByLabel("Full name")).toBeVisible();
});

test("invalid-form-shows-inline-errors", async ({ page }) => {
  await page.goto("/contact");
  await page.getByRole("button", { name: "Send Enquiry" }).click();

  await expect(page.getByText("Enter your full name.")).toBeVisible();
  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
  await expect(page.getByText("Share enough detail for the team to respond.")).toBeVisible();
});
