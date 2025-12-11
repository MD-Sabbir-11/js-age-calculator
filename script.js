function age() {
    var d1 = document.getElementById("date").value;
    var m1 = document.getElementById("month").value;
    var y1 = document.getElementById("year").value;

    if (d1 === "") {
        document.getElementById("date").style.border = "2px solid red";
    } else {
        document.getElementById("date").style.border = "";
    }

    if (m1 === "") {
        document.getElementById("month").style.border = "2px solid red";
    } else {
        document.getElementById("month").style.border = "";
    }
    if (y1 === "") {
        document.getElementById("year").style.border = "2px solid red";
    } else {
        document.getElementById("year").style.border = "";
    }


    // ❗ Check for empty inputs
    if (d1 === "" || m1 === "" || y1 === "") {
        document.getElementById("age").innerHTML = "<span style='color:red;'>Please fill all fields!</span>";
        return; // Stop the function
    }

    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2) {
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    document.getElementById("age").innerHTML = 
        `Your age is ${y} Years ${m} Months ${d} Days`;
}

function resetBorder(input){
    if (input.value !== "") {
        input.style.border = "2px solid #333";  // or your normal border
    } else {
        input.style.border = "2px solid red";
    }
}

