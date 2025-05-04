const asyncFn = require("../3_async_fn/asyncFn");

/*test("3초 후에 받아온 이름은 Park", (done) => {
  function callback(name) {
    expect(name).toBe("Park");
    //Jest는 테스트 함수 내부 비동기 로직이 끝날때까지 기다리지않음
    // 이로인해 setTimeOut함수를 써서 3초를 줬는데도 1초만에 테스트가 끝남
    // 그래서 done을 사용 => 정확한 비동시 테스트 가능
    // done 함수가 신호를 준다. 테스트 끝났어요!
    done();
  }
  asyncFn.getName(callback);
});*/

//  PASS  __tests__/asyncFn.js

// Test Suites: 1 failed, 2 passed, 3 total // 1 fail은 toStrictEqual쪽 의도적실패 코드
// Tests:       1 failed, 21 passed, 22 total
// Snapshots:   0 total
// Time:        4.652 s, estimated 7 s <<<<<< 3초의 시간이지났음
// Ran all test suites.

/*test("3초 후에 받아온 이름은 Park", (done) => {
  function callback(name) {
    //에러 감지하고싶으면 여기서도 try catch
    try {
      expect(name).toBe("Park");
      done();
    } catch (err) {
      done();
    }
  }
  asyncFn.getName(callback);
});*/

// FAIL  __tests__/asyncFn.js (11.575 s)
// ● 3초 후에 받아온 이름은 Park

//   서버 에러...

//     4 |     setTimeout(() => {
//     5 |       // callback(name);
//   > 6 |       throw new Error("서버 에러...");
//       |             ^
//     7 |     }, 3000);
//     8 |   },
//     9 | };

//     at Timeout._onTimeout (3_async_fn/asyncFn.js:6:13)

// Test Suites: 2 failed, 1 passed, 3 total
// Tests:       3 failed, 20 passed, 23 total
// Snapshots:   0 total
// Time:        12.171 s
// Ran all test suites.

//Promise 테스트 코드

// resolves, rejects
test("3초 후에 받을 나이는 30", () => {
  //return asyncFn.getAge().then((age) => {
  //  expect(age).toBe(28);
  //});
  return expect(asyncFn.getAge()).resolves.toBe(28);
});

test("3초 후에 error라는 에러메시지가 나온다", () => {
  //return asyncFn.getAge().then((age) => {
  //  expect(age).toBe(28);
  //});
  return expect(asyncFn.getAge()).rejects.toMatch("error");
});

test("3초 후에 error라는 에러메시지가 나온다", () => {
  //return asyncFn.getAge().then((age) => {
  //  expect(age).toBe(28);
  //});
  return expect(asyncFn.getAge()).rejects.toMatch("error");
});

test("3초 후 나이 28살", async () => {
  //return asyncFn.getAge().then((age) => {
  //  expect(age).toBe(28);
  //});
  //return expect(asyncFn.getAge()).rejects.toMatch("error");
  const age = await asyncFn.getAge();
  expect(age).toBe(28);
});
