let testText = 'Bukankah surat cinta ini ditulis ditulis ke arah siapa saja Seperti hujan yang jatuh ritmis menyentuh arah siapa saja Bukankah surat cinta ini berkisah berkisah melintas lembar bumi yang fana Seperti misalnya gurun yang lelah dilepas embun dan cahaya';
let startTime, endTime;
let flag = false;
let flag2 = true;

document.getElementById("inputText").value = testText;
document.getElementById('userInput').addEventListener("keypress", (event) => {
    if ((event.key == 'Enter') && !flag) {
        endTest();
        flag = true;
        flag2 = true;
        console.log(flag)
    }
})

if (flag2) {
    document.getElementById('userInput').oninput = () => {
        startTest();
        flag = false;
        flag2 = false;
        console.log(flag2)
    }
}
console.log(flag)
function startTest() {
    console.log("test started")
    document.getElementById("userInput").readOnly = false;
    document.getElementById('userInput').value = ""
    // Set the test text
    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();
    document.getElementById('time').innerText = new Date();
    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerText = "End Test";
    button.onclick = () => endTest();
    console.log(flag)
}

function endTest() {
    console.log("test ended");
    document.getElementById('time').innerText = "";
    endTime = new Date().getTime();
    // Disable user input
    document.getElementById("userInput").readOnly = true;
    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;
    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;
    var wpm = 0; // Default value
    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }
    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";
    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = () => startTest();
    console.log(flag)
}