var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}

function getAccount(userName) {
	var matchedAccount;

	// replace with for loop or while loop
	// accounts[0] accounts[1] accounts[i]
	for (i = 0; i < accounts.length; i++) {
		if (accounts[i].userName === userName) {
			matchedAccount = accounts[i];
		}
	}

	return matchedAccount;
}

function deposit(account, amount) {
	// only accept number
	if (typeof amount === 'number') {
		return account.balance += amount;
	} else {
		console.log('Error: Deposit must be a number');
	}
}

function withdraw(account, amount) {
	// only accept number
	if (typeof amount === 'number') {
		return account.balance -= amount;
	} else {
		console.log('Error: Withdrawal must be a number');
	}
}

function getBalance(account) {
	return account.balance;
}

// createBalanceGetter(account)
//		return function() {
// 			account.balance (return it)

function createBalanceGetter(account) {
	return function() {
		return account.balance;
	}
}

var tylersAccount = createAccount({
	userName: 'Tyler',
	balance: 0
})

var tyler2 = getAccount('Tyler');

console.log(deposit(tylersAccount, 125));
console.log(withdraw(tylersAccount, 50));
var getTylersBalance = createBalanceGetter(tyler2);
console.log(getTylersBalance());