function calculate() {
    let billAmountElement = document.getElementById("billAmount"); +
    console.log(billAmountElement)
    let percentageTipElement = document.getElementById("percentageTip");

    if (billAmountElement.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";
        document.getElementById("errorMessage").style.color = "red";
    } else if (percentageTipElement.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input.";
        document.getElementById("errorMessage").style.color = "red";
    } else {
        document.getElementById("errorMessage").textContent = "";
        let billamount = parseInt(billAmountElement.value);
        let percentagetip = parseInt(percentageTipElement.value);
        let tipamount = (percentagetip / 100) * billamount;
        let totalamount = billamount + tipamount;
        document.getElementById("tipAmount").value = tipamount;
        document.getElementById("totalAmount").value = totalamount;
    }
}