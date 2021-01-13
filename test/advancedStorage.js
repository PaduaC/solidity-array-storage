const AdvancedStorage = artifacts.require("AdvancedStorage");

contract("AdvancedStorage", () => {
  let advancedStorage = null;
  before(async () => {
    advancedStorage = await AdvancedStorage.deployed();
  });

  it("should add an element to ids array", async () => {
    await advancedStorage.add(10);
    const result = await advancedStorage.ids(0);
    assert(result.toNumber() === 10);
  });

  it("should get an element of ids array", async () => {
    await advancedStorage.add(20);
    const result = await advancedStorage.ids(1);
    assert(result.toNumber() === 20);
  });

  it("should get the whole ids array", async () => {
    const rawIDs = await advancedStorage.getAll();
    const ids = rawIDs.map((id) => id.toNumber());
    assert.deepEqual(ids, [10, 20]);
  });

  it("should return the length of ids array", async () => {
    const length = await advancedStorage.length();
    assert(length.toNumber() === 2);
  });
});
