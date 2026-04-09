import { expect, test } from "@playwright/test";

test("home-to-project-detail-to-enquiry", async ({ page }) => {
  await page.goto("/");
  await page.goto("/projects/victoryone-amara");

  await page.getByRole("link", { name: "Enquire on This Project" }).click();
  await expect(page).toHaveURL(/\/contact\?project=victoryone-amara/);
  await expect(page.locator('select[name="projectId"]')).toHaveValue("victoryone-amara");
});

test("business-page-context-prefill", async ({ page }) => {
  await page.goto("/businesses/victoryone-group");
  await expect(page.locator('select[name="businessId"]')).toHaveValue("victoryone-group");
});
