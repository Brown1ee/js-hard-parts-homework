const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
let bankAccountBalance = 303.91;
let amount = 0;

function calculateTax(amount) {
  return amount * TAX_RATE;
}

function formatAmount(amount) {
  return "$" + amount.toFixed(2);
}

while (amount < bankAccountBalance) {
  amount = amount + PHONE_PRICE;
  if (amount < SPENDING_THRESHOLD) {
    amount = amount + ACCESSORY_PRICE;
  }
}

console.log("aici amount", amount);
amount = amount + calculateTax(amount);
console.log("a doua", amount);

console.log("your purchase: " + formatAmount(amount));

if (amount > bankAccountBalance) {
  console.log("You can't afford :(");
}

// const purchasePhones = () => {
//   for (let i = 0; i < bankAccountBalance; i += PHONE_PRICE) {
//     byePhone = i;
//   }
//   for (let i = 0; i < SPENDING_THRESHOLD; i += ACCESSORY_PRICE) {
//     byAccessory = i;
//   }
//   amount = byePhone + byAccessory;

//   return amount;
// };

// const calculateTax = nr => {
//   return (nr * TAX_RATE).toFixed(2);
// };

// const formatAmount = nr => {
//   const res = nr * TAX_RATE;
//   return "$" + res.toFixed(2);
// };
// const seeIfCanAffordIt = fn => {
//   if (fn < bankAccountBalance) {
//     return "Yes i'll take them";
//   }
//   return "No, thank you!";
// };

// console.log("price for phone", purchasePhones());
// console.log("Check with taxes", calculateTax(purchasePhones()));
// console.log(seeIfCanAffordIt(calculateTax(purchasePhones())));
// console.log(formatAmount(purchasePhones()));
// console.log(typeof calculateTax(purchasePhones()));
