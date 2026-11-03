import { test } from "node:test";
import assert from "node:assert/strict";
import { aikatsu } from "../index.js";

test("find by title", async () => {
  const result = await aikatsu("一体感");
  assert.equal(result.id, 30);
  assert.equal(result.title, "ライブは一体感！");
});
test("find by id", async () => {
  const result = await aikatsu("30");
  assert.equal(result.id, 30);
  assert.equal(result.title, "ライブは一体感！");
});
test("reports an unknown query", async () => {
  await assert.rejects(aikatsu("__not_found__"), /見つかりません/);
});
