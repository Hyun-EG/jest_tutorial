const fn = require("../1_simple_test/fn");

// toBe : 숫자나 문자 등 기본값을 비교할때 사용한다.
// toBe자리에 들어오는것을 Matcher라고 한다.

test("3 + 5는 8이다", () => {
  expect(fn.add(3, 5)).toBe(8);
});

// 부정 not
test("3 + 5는 8이다", () => {
  expect(fn.add(3, 5)).not.toBe(7);
});
