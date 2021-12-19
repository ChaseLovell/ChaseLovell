function Start() {
    
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}

function Stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

