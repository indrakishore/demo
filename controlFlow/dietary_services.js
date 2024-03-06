let userRole = "Employee";
let accessLevel;

if(userRole == "Employee"){
    accessLevel = "Dietary Service";
} else if(userRole = "Enrolled Member"){
    accessLevel = "Dietary Services and one-on-one interaction with a dietician.";
} else if(userRole == "Subscriber"){
    accessLevel = "Dietary Services";
} else{
    accessLevel = "Enroll or at least subsribe first to all this facility"
}

console.log("Access Level", accessLevel);