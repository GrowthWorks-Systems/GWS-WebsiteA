import { describe, expect, it } from "vitest";

import { GWS_NAV_GROUPS, GWS_NAV_LINKS } from "./gwsNavigation";

describe("GWS navigation reference structure", () => {
  it("preserves the four referenced grouped desktop menus", () => {
    expect(GWS_NAV_GROUPS.map(({ label }) => label)).toEqual([
      "Revenue Infrastructure",
      "Solutions",
      "Industries",
      "Resources",
    ]);
  });

  it("keeps About and Contact as standalone links", () => {
    expect(GWS_NAV_LINKS.map(({ label }) => label)).toEqual(["About", "Contact"]);
  });
});
