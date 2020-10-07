let doc = document.getElementById("form").addEventListener("submit", myFunction)
console.log(doc)






function myFunction(event) {
    event.preventDefault();

    var dayofBirth = document.getElementById("birthday").value.split("-");
    var gender = document.getElementById("gender").value;
    console.log(dayofBirth);
    if (dayofBirth != "") {

        var MM = parseInt(dayofBirth[1]);
        var DD = parseInt(dayofBirth[2]);
        var Year = dayofBirth[0].split("");
        var CC = parseInt(Year[0].concat(Year[1]));
        var YY = parseInt(Year[2].concat(Year[3]));

        var d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
        var d1 = Math.floor(d);

        var akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kwame"];
        var akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];


        if (gender === "male" && d1 >= 0 && d1 <= 6) {
            alert("Your Akan name is " + akanMale[d1])
        }

        else if (gender === "female" && d1 >= 0 && d1 <= 6) {
            alert("Your Akan name is " + akanFemale[d1])
        }
        else {
            alert("invalid input");
        }
    }
    else {
        alert("invalid input");

    }
    document.getElementById("form").reset();
}
    // userDate = dayofBirth + "/" + monthofBirth + "/" + yearofBirth;
    // var ourDate = anotherDate(userDate).getDay();
    // var Weekdays = newarray(7);
    // Weekdays[0] = "Sunday"
    // Weekdays[1] = "Monday"
    // Weekdays[2] = "Tuesday"
    // Weekdays[3] = "Wednesday"
    // Weekdays[4] = "Thursday"
    // Weekdays[5] = "Friday"
    // Weekdays[6] = "Saturday";
    // var userDate = Weekdays[ourDate];
    // if (userDate === undefined) {
    //     document.getElementById("show").innerHTML
    // }
    // else {
    //     document.getElementById("show").innerHTML = "your birthday is on"(ourDate)
    // }
    // if (userDate === undefined) {
    //     document.getElementById("show").innerHTML
    // }
    // else {
    //     document.getElementById("birthday").innerHTML = "your birthday is on"(ourMonth)
    // }
    // if (userDate === undefined) {
    //     document.getElementById("birthday").innerHTML
    // }
    // else {
    //     document.getElementById("birthday").innerHTML = "your birthday is on"(ourYear)
    // }



    // //     const maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku",
    // //         "Yaw", "Kofi", "Kwame"];
    // //     const femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua",
    // //         "Yaa", "Afua", "Ama"];
    // //     if (gender === female) {
    // //         Akanname = Akanfemale[ourDate]
    // //         if (Akanname === undefined) {
    // //             document.getElementById("female").innerHTML = ""
    // //         }
    // //         else (userDate === undefined)
    // //         document.getElementById("female").innerHTML = "your Akan name is"(Akanname)
    // //     }

    // // }


    // if (gender === female) {
    //     Akanname = Akanfemale[ourDate]
    //     if (Akanname === undefined) {
    //         document.getElementById("female").innerHTML = ""
    //     }
    //     else (userDate === undefined)
    //     document.getElementById("female").innerHTML = "your Akan name is"(Akanname)
    // }

    // var myDate = new Date(myStringDate);
    // var dayOfWeek = myDate.getDay();
    // document.getElementById("message")("I was born on " + days[dayOfWeek] + "!");
    // document.getElementById("message").innerHTML = "I was born on " + days[dayOfWeek] + "!";
