var pwd = require('process').cwd();

// Problem def, quick tip use ES6 template strings.
exports.problem = 'Write a program that adds two given numbers: \n\n' +

	'* Create a file `add.js` which returns the sum of two numbers\n\n' +

	'* Don\'t forget to export you function. module.exports = function() {}`);\n\n' +

	'Finally to verify do a `math-adventure verify add.js`\n\n';

// Verifier
exports.verify = function (args, cb) {

	// Propose solution
	var proposed = require(pwd + '/' + args[0]);

	// Check if the solution is correct.

	if (proposed(3, 4) == 7) {
		console.log("You have solved it!");
		return cb(true);
	} else {
		console.log("Sorry, your solution is wrong :(");
	}
};
