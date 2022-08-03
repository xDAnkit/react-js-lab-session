const calculator = (a, b, cb) => {
  const output = cb(a, b);
  return output;
};

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const divide = (a, b) => a / b;

const multiply = (a, b) => a * b;

calculator(10, 5, add);
calculator(10, 15, subtract);
calculator(10, 5, divide);
calculator(10, 5, multiply);

const p = new Promise((reply, reject) => {
  reject(false);
});

const success = (data) => {
  console.log(data);
};

const failure = (data) => {
  console.log(data);
};

p.then(success).catch(failure);

const _onClickLister = (data) => {
  console.log(data);
};

document.addEventListener("click", _onClickLister);
