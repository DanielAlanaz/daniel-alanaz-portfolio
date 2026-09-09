import { test } from "node:test";
import assert from "node:assert/strict";
import {
  clusters,
  networkNodes,
  networkEdges,
  selectNodes,
  validateNetwork,
} from "../src/content/network.ts";
import { projects } from "../src/content/projects.ts";

test("overview exposes every expertise cluster without requiring expansion", () => {
  const nodes = selectNodes("all", "", false);
  assert.deepEqual(
    new Set(nodes.map((n) => n.cluster)),
    new Set(clusters.map((c) => c.id)),
  );
  assert(nodes.every((n) => n.primary));
});
test("expanded and list content includes every node", () => {
  assert.equal(selectNodes("all", "", true).length, networkNodes.length);
});
test("search is case insensitive and finds capability descriptions", () => {
  assert(
    selectNodes("all", "  LIGHTSAIL  ", false).some(
      (n) => n.id === "lightsail",
    ),
  );
  assert.equal(selectNodes("creative", "lightsail", true).length, 0);
});
test("cluster selection exposes its secondary capabilities", () => {
  const nodes = selectNodes("enterprise", "", false);
  assert(nodes.some((n) => n.id === "finance"));
  assert(nodes.every((n) => n.cluster === "enterprise"));
});
test("all edges and case-study links resolve", () => {
  assert.doesNotThrow(validateNetwork);
  const ids = new Set(networkNodes.map((node) => node.id));
  for (const edge of networkEdges)
    assert(ids.has(edge.from) && ids.has(edge.to));
  for (const node of networkNodes) {
    if (!node.href.startsWith("/projects/")) continue;
    const projectPath = node.href.split("#", 1)[0];
    assert(
      projects.some((project) => projectPath === `/projects/${project.slug}/`),
      node.href,
    );
  }
  assert.equal(
    new Set(projects.map((project) => project.slug)).size,
    projects.length,
  );
});
