let myAccount = {
  name: 'John Doe',
  expenses: 0,
  income: 0
}

let addExpense = function(account, amount) {
  account.expenses += amount;
}

function addIncome(account, income) {
  account.income += income
}

function getAccountSummary(account) {
  let { income, expenses } = account,
      diff = income - expenses;

  return `Account for ${account.name} has $${diff}. $${income} in income. $${expenses} in expenses`;
}

function resetAccount(account) {
  account.expenses = account.income = 0;
}

addIncome(myAccount, 1000);
addExpense(myAccount, 200);
getAccountSummary(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(myAccount);
console.log(getAccountSummary(myAccount));