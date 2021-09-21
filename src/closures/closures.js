const moneyBox = (coins) => {
    var saveCoints = 0;
    saveCoints += coins;
    console.log(`MoneyBox: ${saveCoints}`);
}

moneyBox(5);
moneyBox(10);

const moneyBox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`MoneyBox ${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBox();

myMoneyBox(4);
myMoneyBox(6);
myMoneyBox(10);