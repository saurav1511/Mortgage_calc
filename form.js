function calculate() {
    let amt = parseFloat(document.getElementsByClassName("amount")[0].value);

    // desktop and mobile inputs for the mortgage term
    let term = parseFloat(
        document.querySelector(".term")?.value || 
        document.querySelector(".mobile_term")?.value
    );

    // desktop and mobile inputs for the interest rate
    let int = parseFloat(
        document.querySelector(".term1")?.value || 
        document.querySelector(".mobile_term1")?.value
    );

    if (isNaN(amt) || isNaN(term) || isNaN(int)) {
        document.getElementById("submitCalc").disabled = true;
        document.getElementById("btn-c").style.backgroundColor = "grey";
        console.log("Notfound")
    } else {
        document.getElementById("submitCalc").disabled = false;
        document.getElementById("btn-c").style.backgroundColor = "";

        let sum = (amt * term * int) / 100;
        console.log(sum * 100);

        let preresult = document.getElementsByClassName("before_result")[0];
        preresult.style.display = "none";

        let result = document.getElementsByClassName("after_result")[0];
        result.style.display = "block";

        let result1 = document.getElementById("resultshow");
        result1.textContent = "₹ " + (sum / 12).toFixed(2);

        let result2 = document.getElementById("final");
        result2.textContent = "₹ " + (amt + sum * 12).toFixed(2);
    }

    return false;
}


// reseting the form
function clear() {
    document.getElementsByClassName("amount")[0].value = "";
    document.getElementsByClassName("term")[0].value = "";
    document.getElementsByClassName("mobile_term")[0].value = "";

    document.getElementsByClassName("term1")[0].value = "";
    document.getElementsByClassName("mobile_term1")[0].value = "";

    
    let radioButtons = document.getElementsByClassName("radio1");
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    // Optionally, reset the displayed result and div visibility
    let preresult = document.getElementsByClassName("before_result")[0];
    preresult.style.display = "block";

    let result = document.getElementsByClassName("after_result")[0];
    result.style.display = "none";

    let result1 = document.getElementById("resultshow");
    result1.textContent = "";

    return false;

}
    document.getElementById("reset").onclick = clear;
