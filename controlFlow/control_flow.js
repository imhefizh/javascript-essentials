let userRole = "user";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if(userRole === "manager" ) {
    accessLevel = "Limited access granted"
} else {
    accessLevel = "No access granted"
}

console.log("Access level:", accessLevel);

let userType = prompt("Who are you? (admin/manager/user)");
switch (userType) {
    case "admin":
        console.log("Welcome admin!");
        break;
    case "manager":
        console.log("Welcome manager!");
        break;
    case "user":
        console.log("Welcome user!");
        break;
    default:
        console.log("You are none")
}