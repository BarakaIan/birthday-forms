function myFunction() {
    alert("Data submitted!")
    var myStringDate = document.getElementById("dateProvided").value;
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku",
        "Yaw", "Kofi", "Kwame"];
    var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua",
        "Yaa", "Afua", "Ama"];
    var myDate = new Date(myStringDate);
    var dayOfWeek = myDate.getDay();
    console.log("I was born on " + days[dayOfWeek] + "!");
    document.getElementById("message").innerHTML = "I was born on " + days[dayOfWeek] + "!";
}
