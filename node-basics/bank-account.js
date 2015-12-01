var account = {
	balance: 0
};

//function to deposit amount
function desposit(account, amount) {
	account.balance += amount;
}

//function to withdraw amount
function withdraw(account, amount) {
	account.balance -= amount;
}

//function to show balance
function getBalance(account) {
	return account.balance;
}

desposit(account, 30);
withdraw(account, 10);
console.log(getBalance(account));