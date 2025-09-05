const btn = document.getElementById("calculate");

btn.addEventListener("click", function(){
    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == "" || weight == ""){
        alert("Please Fill All The Input Fields !!");
        return;
    }

    height = height / 100

    let BMI = (weight)/(height * height);

    BMI = BMI.toFixed(2);

    console.log(BMI);

    document.querySelector("#output").innerHTML = BMI;

    let status = "";

    if(BMI < 18.5){
        status = "Underweight";
    }

    if ( BMI >= 18.5 && BMI < 24.9) {
        status = "Healthy";
    } 

    if ( BMI >= 25 && BMI < 29.9) {
        status = "Overweight";
    }

    if ( BMI >= 30) {
        status = "Obese";
    } 

    document.querySelector(".bmi_result").innerHTML = `You are <span>${status}</span>`;
});