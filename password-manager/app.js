console.log('starting password manager');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create a new account', function(yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name (eg: Twitter, Facebook)',
				type: 'string'
			},
			username: {
				demand: true,
				alias: 'u',
				description: 'Account username or email',
				type: 'string'
			},
			password: {
				demand: true,
				alias: 'p',
				description: 'Your password goes here',
				type: 'string'
			}
		}).help('help');
	})
	.command('get', 'Retrieve an account', function (yargs) {
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				description: 'Account name goes here',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;
var command = argv._[0];

// create
// 		--name
//		--username
//		--password

if (command === 'create') {
	var createdAccount = createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	})

	console.log('Account created!');
	console.log(createdAccount);

} else if (command === 'get') {
	var fetchedAccount = getAccount(argv.name);

	if (typeof fetchedAccount === 'undefined') {
		console.log('Account not found');
	} else {
		console.log('Account found!');
		console.log(fetchedAccount);
	}
}

// get
//		--name

// account.name Facebook
// account.username User12!
// account.password Password123!

function createAccount(account) {
	var accounts = storage.getItemSync('accounts');

	// if accounts is undefined 
	// 		set accounts = []

	if (typeof accounts === 'undefined') {
		accounts = [];
	}

	// push on new account

	accounts.push(account);
	storage.setItemSync('accounts', accounts);

	//return account

	return account;
}

function getAccount(accountName) {
	var accounts = storage.getItemSync('accounts');
	var matchingAccount;

	// iterate over accounts array, return matching account, else undefined

	accounts.forEach(function(account) {
		if (account.name === accountName) {
			matchingAccount = account;
		}
	});

	return matchingAccount;
}

// var facebookAccount = getAccount('Facebook');
// console.log(facebookAccount);
