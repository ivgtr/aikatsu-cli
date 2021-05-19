import aikatsu from "../index";

describe("Check return str", () => {
  test("submit 一体感", async () => {
    const queryKakugen = await aikatsu("一体感");
    // => { id:30, title:'ライブは一体感！', link:'~' }

    expect(queryKakugen.id).toBe(30);
    expect(queryKakugen.title).toBe("ライブは一体感！");
  });

  test("submit 30", async () => {
    const queryKakugen = await aikatsu("30");
    // => { id:30, title:'ライブは一体感！', link:'~' }

    expect(queryKakugen.id).toBe(30);
    expect(queryKakugen.title).toBe("ライブは一体感！");
  });
});
