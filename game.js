const DATE = new Date();
let currentTime = DATE.getTime();
let lastTime = 0;
let totalNum = 0;
let lastTotal = 0;

let upgradeArray = [];
let upgradeCostArray = [];
let amountArray = [];

window.addEventListener("load", () => {
    const clicker = document.querySelector("#clicker");
    const totalNumElement = document.querySelector("#total-num");
    const rateElement = document.querySelector("#rate");

    const upgradeBtn1 = document.querySelector("#upgrade1-button");
    const upgrade1Element = document.querySelector("#up1-level");
    const upgradeMakeBtn = document.querySelector("#upgrade-make-button");
    const upgradeMakeElement = document.querySelector("#make-level");

    totalNum = 0;
    totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
    rateElement.innerHTML = "Cookies per Second: " + String(0);

    upgradeArray.push(1);
    upgradeCostArray.push(20);
    amountArray.push(1);

    for (let i = 1; i < 10; i++){
        upgradeArray.push(0);
        upgradeCostArray.push(i * 10);
        amountArray.push(i * 5);
    }

    function Update(){
        for (let i = 1; i < 10; i++){
            if (upgradeArray[i] > 0){
                MakeCookie(amountArray[i]);
            }
        }
        
        currentTime = DATE.getTime();
        let rate = totalNum - lastTotal;
        lastTotal = totalNum;
        lastTime = currentTime;
        totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
        rateElement.innerHTML = "Cookies per Second: " + String(rate);

        upgrade1Element.innerHTML = "Upgrade 1 ("+ String(upgradeCostArray[1]) + " Cookies required) Level: " + String(upgradeArray[1]);
        upgradeMakeElement.innerHTML = "Upgrade Cookies per Click ("+ String(upgradeCostArray[0]) + " Cookies required) Level: " + String(upgradeArray[0]);
    }

    function MakeCookie(amount){
        totalNum += amount;
        totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
    }

    function Upgrade(index){
        if (totalNum < upgradeCostArray[index]){
            return;
        }
        totalNum -= upgradeCostArray[index];
        lastTotal = totalNum;

        upgradeArray[index]++;
        upgradeCostArray[index] = Math.round(upgradeCostArray[index] * 2.5);
        
        if (index == 0 && amountArray[index] <= 5){
            amountArray[index] *= 2;
        }
        else{
            amountArray[index] = Math.round(amountArray[index] * 1.2);
        }
    }

    clicker.addEventListener("click", () => {
        MakeCookie(amountArray[0]);
    });

    upgradeMakeBtn.addEventListener("click", () => {
        Upgrade(0);
        upgradeMakeElement.innerHTML = "Upgrade Cookies per Click ("+ String(upgradeCostArray[0]) + " Cookies required) Level: " + String(upgradeArray[0]);
    });

    upgradeBtn1.addEventListener("click", () => {
        Upgrade(1);
        upgrade1Element.innerHTML = "Upgrade 1 ("+ String(upgradeCostArray[1]) + " Cookies required) Level: " + String(upgradeArray[1]);
    });

    let update = setInterval(Update, 1000);
});