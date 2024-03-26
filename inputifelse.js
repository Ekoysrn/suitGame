function myFunction(){
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)){
    voteable = "input is not a number";
    }else{
    voteable= (age < 17) ? "to young" : "old enough"
    }
    document.getElementById("demo").innerHTML = voteable + " to vote ";
}