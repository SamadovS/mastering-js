const moment = require("moment");

class Account {
    #amount;
    #account_id;
    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }
    tellMeBalance() {
        console.log(`Your balance is: $`, this.#amount);
        return this.#amount;
    }

    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount -= amount; // ==> this.#amount = this.#amount - amount
            console.log(
                `${amount} is withdrawn. The balance is: $ ${this.#amount}`
            );
        } else {
            console.log(
                `You don't have enough money to withdrawn! Your balance: $ ${
                    this.#amount
                }`
            );
        }
    }

    makeDeposit(amount) {
        this.#amount += amount; // ==> this.#amount = this.#amount - amount
        console.log(
            `You have deposited money. Your balance: $ ${this.#amount}`
        );
    }

    giveMeDetails() {
        console.log(`Hi, ${this.name}. Your balance: $ ${this.#amount}`);
        console.log(`Your account number: `, this.#account_id);
    }

    static tellMeAboutClass() {
        console.log(`This class is for making accounts`);
    }

    static tellMeTime() {
        console.log(`Time is now: ${moment().format("YYYY-MM-DD HH:mm:ss")}`);
    }
}

module.exports = Account;
