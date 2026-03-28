console.log("Starting Matchmaker Lite...")

function calculateCompatibility() {
    console.log("CalculateCompatibility()")

    //Data array for choices
    const DESIRED_RESPONSE = [
        5, // Question 5 
        4, // Question 4
        3, // Question 3
        2, // Question 2
        1, // Question 1
    ]

    const MAX_SCORE = 25;

    //pulls values from questions 
    let question1Response = document.getElementById('q1').selectedOptions[0].value;
    let question2Response = document.getElementById('q2').selectedOptions[0].value;
    let question3Response = document.getElementById('q3').selectedOptions[0].value;
    let question4Response = document.getElementById('q4').selectedOptions[0].value;
    let question5Response = document.getElementById('q5').selectedOptions[0].value;

    //Logs the values 
    console.log("Question 1 Answers:")
    console.log(document.getElementById('q1').selectedOptions[0].text)
    console.log(document.getElementById('q1').selectedOptions[0].value)
    console.log(question1Response)

    console.log("Question 2 Answers:")
    console.log(document.getElementById('q2').selectedOptions[0].text)
    console.log(document.getElementById('q2').selectedOptions[0].value)
    console.log(question1Response)

    console.log("Question 3 Answers:")
    console.log(document.getElementById('q3').selectedOptions[0].text)
    console.log(document.getElementById('q3').selectedOptions[0].value)
    console.log(question1Response)

    console.log("Question 4 Answers:")
    console.log(document.getElementById('q4').selectedOptions[0].text)
    console.log(document.getElementById('q4').selectedOptions[0].value)
    console.log(question1Response)

    console.log("Question 5 Answers:")
    console.log(document.getElementById('q5').selectedOptions[0].text)
    console.log(document.getElementById('q5').selectedOptions[0].value)
    console.log(question1Response)
    
    //desired selection for questions
    let question1Compatibility = 5 - Math.abs(question1Response - DESIRED_RESPONSE[0]);
    let question2Compatibility = 5 - Math.abs(question2Response - DESIRED_RESPONSE[0]);
    let question3Compatibility = 5 - Math.abs(question3Response - DESIRED_RESPONSE[0]);
    let question4Compatibility = 5 - Math.abs(question4Response - DESIRED_RESPONSE[0]);
    let question5Compatibility = 5 - Math.abs(question5Response - DESIRED_RESPONSE[0]);

    //log identification
    console.log("c1="+question1Compatibility);
    console.log("c2="+question2Compatibility);
    console.log("c3="+question3Compatibility);
    console.log("c4="+question4Compatibility);
    console.log("c5="+question5Compatibility);

    //scoring constraints and calculations
    let totalCompatibility = question1Compatibility + question2Compatibility + question3Compatibility + question4Compatibility + question5Compatibility;

    totalCompatibility *= 100 / MAX_SCORE;
    totalCompatibility = Math.round(totalCompatibility);
    console.log("tc="+ totalCompatibility);

    //if statements to create unique replies
if (totalCompatibility === 100){
    message = "Perfect match!";
    document.getElementById("sound6").play();
}
else if (totalCompatibility >= 75){
    message = "Almost... perfect...";
    document.getElementById("sound5").play();
}
else if (totalCompatibility >= 50){
    message = "Not too shabby";
    document.getElementById("sound4").play();
}
else if (totalCompatibility >= 25){
    message = "I guess nobody is perfect";
    document.getElementById("sound3").play();
}
else if (totalCompatibility === 0){
    message = "Dude... You have to send answers before you hit that....";
    document.getElementById("sound1").play();
}
else {
    message = "Get out of my sight!";
    document.getElementById("sound2").play();
}

let btn = document.getElementById("calcBtn");
btn.innerHTML = "Your Compatibility is " + totalCompatibility + "% - " + message;
}