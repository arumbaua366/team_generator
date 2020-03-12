const Temp = require("../lib/Temp");

test("Can set Temp Agency via constructor", () => {
  const testValue = "TempAgency";
  const e = new Temp("Foo", 1, "test@test.com", testValue);
  expect(e.agency).toBe(testValue);
});

test("getRole() should return \"Temp\"", () => {
  const testValue = "Temp";
  const e = new Temp("Foo", 1, "test@test.com", "TempAgency");
  expect(e.getRole()).toBe(testValue);
});

test("Can get Temp Agency name via getTempAgency()", () => {
  const testValue = "TempAgency";
  const e = new Temp("Foo", 1, "test@test.com", testValue);
  expect(e.getTempAgency()).toBe(testValue);
});
