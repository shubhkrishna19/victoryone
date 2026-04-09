import { expect, test } from "@playwright/test";

test("homepage loads and primary navigation is visible", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Furnished homes and commercial opportunities",
  );

  if (test.info().project.name === "mobile") {
    await expect(page.getByRole("button", { name: "Open menu" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Request Callback" }).last()).toBeVisible();
    return;
  }

  await expect(page.getByRole("link", { name: "About" })).toBeVisible();
  await expect(page.getByRole("button", { name: "Request Callback" }).first()).toBeVisible();
});
