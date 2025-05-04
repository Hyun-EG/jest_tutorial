class_1

toBe : 숫자나 문자 등 기본값을 비교할때 사용한다.

부정 not

템플릿
test("테스트 코드 설명",()=>{
expect(테스트함수).toBe(결과 기댓값)
})

class_2

객체나 배열은 재귀적으로 돌면서 값을 확인해야 하기때문에 toEqual을 사용해야한다.

test("이름은 박성현이고 28살이야", () => {
expect(matcher.makeUser("박성현", 28)).toEqual({ name: "박성현", age: 28 });
});

makeUser 함수 리턴에 값이 undefined인 gender 추가한 상황
Fail 나와야하는데 Passed 나온상황

test("이름은 박성현이고 28살이야", () => {
  expect(matcher.makeUser("박성현", 28)).toEqual({ name: "박성현", age: 28 });
});

의도한데로 Fail이 나온 테스트코드
엄격한 테스트를 위해 권고하는데로 toStrictEqual을 사용하는게 좋다
test("이름은 박성현이고 28살이야", () => {
  expect(matcher.makeUser("박성현", 28)).toStrictEqual({
    name: "박성현",
    age: 28,
  });
});

toBeNull
toBeUndefined
toBeDefined

test("null입니다", () => {
  expect(null).toBeNull();
});
test("undefined입니다", () => {
  expect(undefined).toBeUndefined();
});
test("옳게 정의돼있습니다.", () => {
  expect(matcher.makeUser.name).toBeDefined();
});

toBeTruthy
toBeFalsy

test("진실입니다.", () => {
  expect(0).not.toBeTruthy();
});

test("진실입니다.", () => {
  expect(1).toBeTruthy();
});

test("진실입니다.", () => {
  expect("Hello World").toBeTruthy();
});

test("거짓입니다.", () => {
  expect(0).toBeFalsy();
});

test("거짓입니다.", () => {
  expect("").toBeFalsy();
});

toBeGreaterThan 크다
toBeGreaterThanOrEqual 크거나 같다
toBeLessThan 작다
toBeLessThanOrEqual 작거나 같다

test("ID는 5자 초과여야합니다.", () => {
  const id = "codiee";
  expect(id.length).toBeGreaterThan(5);
});

test("PASSWORD는 8자 이상이여야합니다.", () => {
  const password = "12312312";
  expect(password.length).toBeGreaterThanOrEqual(8);
});

test("ID는 10자 미만이여야합니다.", () => {
  const id = "codiee";
  expect(id.length).toBeLessThan(10);
});

test("PASSWORD는 16자 이하이여야합니다.", () => {
  const password = "1231231231231231";
  expect(password.length).toBeLessThanOrEqual(16);
});

주의할점
컴퓨터 연산에서 0.1 더하기 0.2 는 0.3이아님 0.3000000..4 이렇게나옴

Fail 예시
test("0.1+0.2= 0.3입니다.", () => {
expect(fn.add(0.1, 0.2)).toBe(0.3);
});

//toBeCloseTo 사용 (값이 근사치인지 판별해줌)
test("0.1+0.2= 0.3입니다.", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("Hello World에는 a라는 글자가 있는가", () => {
  expect("Hello World").toMatch(/H/);
});

대소문자 구분없이 매치하고싶으면 정규표현식 뒤에 i 넣으면됨
test("Hello World에는 a라는 글자가 있는가", () => {
  expect("Hello World").toMatch(/h/i);
});

toContain

test("유저 리스트에 Mike가 있습니까?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

toThrow
throwErr() 에러문구 'x'로 해놓은상태

Fail 예시
test("이거 에러 나요?", () => {
 expect(() => matcher.throwErr()).toThrow("o");
});

Passed
test("이거 에러 나요?", () => {
  expect(() => matcher.throwErr()).toThrow("x");
});
