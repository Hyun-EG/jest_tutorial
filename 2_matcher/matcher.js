const matcher = {
  makeUser: (name, age) => {
    return { name, age, gender: undefined };
  },
  throwErr: () => {
    throw new Error("x");
  },
};

module.exports = matcher;
