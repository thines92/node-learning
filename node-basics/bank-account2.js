var accounts = [];

// Account Object
// balance
// userName

// createAccount(account) function
// push onto accounts array
// return account\

function createAccount(account, balance) {
	accounts[account] = {
		balance: balance,
		userName: account
	},
	accounts.push(accounts[account]);
	return account;
}

// getAccount(userName) function
// find matching account using forEach

function getAccount(userName) {
	var matchedAccount;

	accounts.forEach(function(account) {
		if (account[.userName === account) {
			matchedAccount = account;
		} else {
			matchedAccount = "no";
		}
	})
	return matchedAccount;
}

//function to deposit amount
function desposit(account, amount) {
	accounts[account].balance += amount;
}

//function to withdraw amount
function withdraw(account, amount) {
	accounts[account].balance -= amount;
}

//function to show balance
function getBalance(account) {
	return accounts[account].balance;
}

createAccount('tyler', 100);
createAccount('mike', 75);
desposit('tyler', 50);
console.log(accounts);
console.log(getBalance('tyler'));
var test = getAccount('tyler');
console.log(test);