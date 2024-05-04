//ATM
import inquirer from "inquirer";
let user = await inquirer.prompt([
    {
        type: "string",
        name: "cardHolderName",
        message: " Welcome Zubaida",
    },
    {
        type: 'number',
        name: "pinCode",
        message: "enter your 4 digit pinCode"
    },
    {
        //listing and withdrawl method
        type: "list",
        name: "accountType",
        message: "select your account type",
        choices: ["current", "saving"]
    },
    {
        //transition type
        type: "list",
        name: "transitionType",
        choices: ["cash", "withdrawl"]
    },
    {
        //selected amount
        type: "list",
        name: "amount",
        message: "select your amount",
        choices: [1000, 2000, 5000, 10000],
        when(user) {
            return user.transitionType === "cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your amount",
        when(user) {
            return user.transitionType === "withdrawl";
        }
    }
]);
//final slip
if (user.pinCode) {
    const balance = Math.floor(Math.random() * 10000 + 1);
    console.log(balance);
    const enterAmount = user.account;
    if (enterAmount <= balance) {
        const remaining = balance - enterAmount;
        console.log(`you have withdrawl rupees ${enterAmount} and you have remaining balance ${remaining}`);
    }
}
