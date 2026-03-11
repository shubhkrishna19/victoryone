import { render, screen } from "@testing-library/react";

import { useQueryContext } from "@/hooks/useQueryContext";

vi.mock("next/navigation", () => ({
  usePathname: () => "/contact",
}));

function QueryContextProbe() {
  const context = useQueryContext();
  return <pre data-testid="query-context">{JSON.stringify(context)}</pre>;
}

describe("useQueryContext", () => {
  it("extracts business, project, and campaign params from the current URL", () => {
    window.history.pushState(
      {},
      "",
      "/contact?business=victoryone-group&project=victoryone-central&utm_source=google&utm_medium=cpc&utm_campaign=brand",
    );

    render(<QueryContextProbe />);

    const text = screen.getByTestId("query-context").textContent ?? "";
    expect(text).toContain("\"businessId\":\"victoryone-group\"");
    expect(text).toContain("\"projectId\":\"victoryone-central\"");
    expect(text).toContain("\"source\":\"google\"");
    expect(text).toContain("\"medium\":\"cpc\"");
    expect(text).toContain("\"campaign\":\"brand\"");
  });
});
