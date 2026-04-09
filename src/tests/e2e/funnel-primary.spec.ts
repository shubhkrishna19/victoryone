import { expect, test } from "@playwright/test";

test("home-to-contact-success", async ({ page }) => {
  await page.goto("/");
  await page.goto("/contact");

  await page.getByLabel("Full name").fill("Shubh Krishna");
  await page.getByLabel("Email address").fill(`shubh+${Date.now()}@example.com`);
  await page.getByLabel("Phone number").fill("+919876543210");
  await page.getByLabel("I'm reaching out about").selectOption("project");
  await page.locator('select[name="projectId"]').selectOption("victoryone-amara");
  await page
    .getByLabel("Project or enquiry detail")
    .fill("Please share project details, brochure availability, and next steps for scheduling a site visit.");
  await page
    .getByRole("checkbox", {
      name: "I agree to be contacted by VictoryOne about this enquiry.",
    })
    .check();
  await page.getByRole("button", { name: "Send Enquiry" }).click();

  await expect(page).toHaveURL(/\/thank-you\?type=enquiry/, { timeout: 15_000 });
  await expect(page.getByText("Thanks, your message is with the VictoryOne team.")).toBeVisible();
});
