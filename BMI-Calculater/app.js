let heightInput = document.querySelector(".height-input-field");
let weightInput = document.querySelector(".weight-input-field");
let calculateButton = document.querySelector(".calculate");
let result = document.querySelector(".result");
let statement = document.querySelector(".result-statement");

let BMI;
let height;
let weight;


function ageValidation(){
    let age = document.getElementById("Age").value;
    if(age<2 || age>120){
        alert("Please provide an age between 2 and 120.")
    }
}

// function clear() {
//     document.getElementById("myForm").reset();
// }

calculateButton.addEventListener("click", ()=>{
    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2);
    result.innerText = BMI;

    if(BMI<16){
        statement.innerText = "Your BMI falls within the Severe Thinness";
    }else if((BMI>16) && (BMI<17)){
        statement.innerText = "Your BMI falls within the Moderate Thinness";
    }else if((BMI>17) && (BMI<18.5)){
        statement.innerText = "Your BMI falls within the Mild Thinness";
    }else if((BMI>18.5) && (BMI<25)){
        statement.innerText = "Your BMI falls within the Normal";
    }else if((BMI>25) && (BMI<30)){
        statement.innerText = "Your BMI falls within the Overweight";
    }else if((BMI>30) && (BMI<35)){
        statement.innerText = "Your BMI falls within the Obese Class 1";
    }else if((BMI>35) && (BMI<40)){
        statement.innerText = "Your BMI falls within the Obese Class 2";
    }else {
        statement.innerText = "Your BMI falls within the Obese Class 3";
    }
})