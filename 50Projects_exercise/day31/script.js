const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const getRandomLower = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getRandomSymbol = () => {
  const symbols = "!@#$%^&*()_+{}[];:<>,.?/~`|";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value;
  const hasLower = lowercaseEl.checked;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = "";
  //选中的数量
  const typesCount = lower + upper + number + symbol;
  if (typesCount === 0) return "";
  //过滤出选择的类型
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => {
      // 获取对象的值
      return Object.values(item)[0] === true;
    }
  );

  //根据选择的类型，调用对应的随机生成函数
  //这里步长设计是为了让每种类型都能选到
  for (let i = 0; i < length; i += typesCount) {
    typeArr.forEach((type) => {
      //获取对象的键名
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }
  return generatedPassword;
};

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  if (!password) return;

  navigator.clipboard.writeText(password);
  alert("密码已复制到剪贴板");
});
