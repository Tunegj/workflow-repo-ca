import { describe, it, expect, beforeEach, vi } from "vitest";
import { saveUser, getUsername, clearStorage } from "../../js/utils/storage.js";

// describe("getUsername", () => {
//   beforeEach(() => {
//     clearStorage();
//   });

//   it("returns the name from the user object in storage", () => {
//     saveUser({ name: "Tone" });

//     const result = getUsername();

//     expect(result).toBe("Tone");
//   });

//   it("returns null when no user exists in storage", () => {
//     const result = getUsername();

//     expect(result).toBe(null);
//   });
// });

const localStorageMock = {
  store: {},
  getItem(key) {
    return this.store[key] ?? null;
  },
  setItem(key, value) {
    this.store[key] = value;
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  },
};

vi.stubGlobal("localStorage", localStorageMock);

describe("getUsername", () => {
  beforeEach(() => {
    clearStorage();
  });

  it("returns the name from the user object in storage", () => {
    saveUser({ name: "Tone" });

    const result = getUsername();

    expect(result).toBe("Tone");
  });

  it("returns null when no user exists in storage", () => {
    const result = getUsername();

    expect(result).toBe(null);
  });
});
