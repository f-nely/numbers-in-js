const num1 = 1_530.5;
console.log(num1.toLocaleString()); // en-us - 1,530.5
console.log(num1.toLocaleString("pt-br")); // 1.530,5
console.log(
  num1.toLocaleString("ja-JP", { style: "currency", currency: "JPY" })
); // ￥1,531
console.log(
  num1.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
); // R$ 1.530,50
console.log(
  num1.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "code",
  })
); // BRL 1.530,50
console.log(
  num1.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
    currencyDisplay: "name",
  })
); // 1.530,50 Reais brasileiros
