function showDateTime() {

    var currentDate = new Date();

    document.getElementById("result").innerHTML =
        currentDate.toLocaleString();
}

