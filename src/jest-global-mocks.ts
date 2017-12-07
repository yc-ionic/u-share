const mock = () => {
  return {
    share: (options: any, success, fail) => {
      success(true);
    },
    test:(options: any, success, fail) => {
      success(true);
    },
  };
};

Object.defineProperty(window, 'UShare', {value: mock()});
