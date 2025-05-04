const asyncFn = {
  getName: (callback) => {
    const name = "Park";
    setTimeout(() => {
      // callback(name);
      // 의도적 에러내기
      throw new Error("서버 에러...");
    }, 3000);
  },

  getAge: () => {
    const age = 28;
    return new Promise((res, rej) => {
      setTimeout(() => {
        //res(age);
        //rej("error");
      }, 3000);
    });
  },
};

module.exports = asyncFn;
