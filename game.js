const DATE = new Date();
let currentTime = DATE.getTime();
let lastTime = 0;
let totalNum = 0;
let lastTotal = 0;

window.addEventListener("load", () => {
    const clicker = document.querySelector("#clicker");
    const totalNumElement = document.querySelector("#total-num");
    const rateElement = document.querySelector("#rate");

    totalNum = 0;
    totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
    rateElement.innerHTML = "Cookies per Second: " + String(0);

    function Update(){
        MakeCookie();

        currentTime = DATE.getTime();
        let rate = totalNum - lastTotal;
        lastTotal = totalNum;
        lastTime = currentTime;
        totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
        rateElement.innerHTML = "Cookies per Second: " + String(rate);
    }
    
    function MakeCookie(){
        totalNum++;
        totalNumElement.innerHTML = "Number of cookies: " + String(totalNum);
    }

    clicker.addEventListener("click", () => {
        MakeCookie();
    });

    let update = setInterval(Update, 1000);
});