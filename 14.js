var guests = ["Thomas Edison", "Bill Gates", "Babar Azam", "Mark Zakarbarg"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, " Would you like to Join me for Dinner?"));
});
var unableToAttend = "Thomas Edison";
console.log("".concat(unableToAttend, " can't Make it to Dinner."));
// Replace The guest
var newGuest = "Shadab Khan";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", Would you like to join me for Dinner"));
});
