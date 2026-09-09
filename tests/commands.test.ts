import { test } from "node:test";
import assert from "node:assert/strict";
import { executeCommand } from "../src/features/contact/commands.ts";

test("normalizes surrounding whitespace and command case", () => {
  assert.equal(executeCommand("  EMAIL  ").href, "mailto:Daniel.alanaz99@gmail.com");
});
test("clear resets terminal history without an external action", () => {
  assert.deepEqual(executeCommand("clear"), {text: "", clear: true});
});
test("unknown input is data, never a URL or executable action", () => {
  for (const input of ["javascript:alert(1)", "<script>alert(1)</script>", "email && rm -rf", "https://example.com"]) {
    const result = executeCommand(input);
    assert.equal(result.href, undefined);
    assert.match(result.text, /Command not found/);
  }
});
test("empty and unknown commands provide a recovery path", () => {
  assert.match(executeCommand("").text, /help/);
  assert.match(executeCommand("unknown").text, /help/);
});
