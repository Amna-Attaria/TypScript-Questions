var guestse = ["Thomas Edison", "Bill Gates", "Babar Azam", "Mark Zakarbarg"];
console.log("Unfortunately, I can only invite two people for dinner");
// Adding more guests
guestse.unshift("Newton");
while (guestse.length > 2) {
    var removedGuest = guestse.pop();
    console.log("Sorry ".concat(removedGuest, ", I can't invite you to dinner."));
}
guestse.forEach(function (guestse) {
    console.log("Dear ".concat(guestse, ", You are still invited to dinner. "));
});
guestse.splice(0, guestse.length);
console.log(guestse);
