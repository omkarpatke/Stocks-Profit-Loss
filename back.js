var CostPrice = document.querySelector(".purchaseprice");
var SellPrice = document.querySelector(".currentprice");
var StockUnit = document.querySelector(".stockunit");
var OutputDiv = document.querySelector('.output');
var Checkbtn = document.querySelector(".btn");
var profitImg = document.querySelector(".profitimg");
var lossImg = document.querySelector(".lossimg");


function ProfitLoss(e){
    e.preventDefault();
    const Unit = Number(StockUnit.value);
    const costPrice = Number(CostPrice.value)*Unit;
    const sellPrice = Number(SellPrice.value)*Unit;
    

    if(Unit === "" ||
    SellPrice.value === "" ||
    CostPrice.value === ""){
        OutputDiv.innerHTML = "All the fields are mandatory, please enter all the values!";
    }else{
        const absolute = (sellPrice - costPrice).toFixed(2);
        const percentage = ((absolute /costPrice)*100).toFixed(2);

        if(absolute > 0){
            OutputDiv.innerText =`Congratulations! You gained ${percentage}%. Your total profit is ₹${absolute}`;
            profitImg.classList.remove('hidden');
        }else if(absolute == 0){
            OutputDiv.innerText = "No profit or loss";
        }else{
            OutputDiv.innerHTML = `Ohh no! You have lost ${-percentage}%. You total loss is ₹${-absolute}`;
            lossImg.classList.remove('hidden');
        }
    }
}
Checkbtn.addEventListener("click", ProfitLoss);
