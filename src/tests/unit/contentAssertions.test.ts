import { validateContentIntegrity } from "@/lib/contentAssertions";

describe("content integrity", () => {
  it("keeps business and project references internally consistent", () => {
    expect(() => validateContentIntegrity()).not.toThrow();
  });
});
